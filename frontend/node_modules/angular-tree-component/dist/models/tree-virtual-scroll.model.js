var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { observable, computed, action, autorun, reaction } from 'mobx';
import { TreeModel } from './tree.model';
import { TREE_EVENTS } from '../constants/events';
var Y_OFFSET = 500; // Extra pixels outside the viewport, in each direction, to render nodes in
var Y_EPSILON = 150; // Minimum pixel change required to recalculate the rendered nodes
var TreeVirtualScroll = /** @class */ (function () {
    function TreeVirtualScroll(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [autorun(function () { return _this.fixScroll(); })];
    }
    Object.defineProperty(TreeVirtualScroll.prototype, "y", {
        get: function () {
            return this.yBlocks * Y_EPSILON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeVirtualScroll.prototype, "totalHeight", {
        get: function () {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    TreeVirtualScroll.prototype.fireEvent = function (event) {
        this.treeModel.fireEvent(event);
    };
    TreeVirtualScroll.prototype.init = function () {
        var _this = this;
        var fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = this._dispose.concat([
            reaction(function () { return _this.treeModel.roots; }, fn),
            reaction(function () { return _this.treeModel.expandedNodeIds; }, fn),
            reaction(function () { return _this.treeModel.hiddenNodeIds; }, fn)
        ]);
        this.treeModel.subscribe(TREE_EVENTS.loadNodeChildren, fn);
    };
    TreeVirtualScroll.prototype.isEnabled = function () {
        return this.treeModel.options.useVirtualScroll;
    };
    TreeVirtualScroll.prototype._setYBlocks = function (value) {
        this.yBlocks = value;
    };
    TreeVirtualScroll.prototype.recalcPositions = function () {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    };
    TreeVirtualScroll.prototype._getPositionAfter = function (nodes, startPos) {
        var _this = this;
        var position = startPos;
        nodes.forEach(function (node) {
            node.position = position;
            position = _this._getPositionAfterNode(node, position);
        });
        return position;
    };
    TreeVirtualScroll.prototype._getPositionAfterNode = function (node, startPos) {
        var position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) {
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    };
    TreeVirtualScroll.prototype.clear = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeVirtualScroll.prototype.setViewport = function (viewport) {
        Object.assign(this, {
            viewport: viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect ? viewport.getBoundingClientRect().height : 0
        });
    };
    TreeVirtualScroll.prototype.scrollIntoView = function (node, force, scrollToMiddle) {
        if (scrollToMiddle === void 0) { scrollToMiddle = true; }
        if (node.options.scrollContainer) {
            var scrollContainer = node.options.scrollContainer;
            var scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
            var scrollContainerTop = scrollContainer.getBoundingClientRect().top;
            var nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;
            if (force || // force scroll to node
                nodeTop < scrollContainer.scrollTop || // node is above scroll container
                nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) {
                scrollContainer.scrollTop = scrollToMiddle ?
                    nodeTop - scrollContainerHeight / 2 : // scroll to middle
                    nodeTop; // scroll to start
            }
        }
        else {
            if (force || // force scroll to node
                node.position < this.y || // node is above viewport
                node.position + node.getSelfHeight() > this.y + this.viewportHeight) {
                if (this.viewport) {
                    this.viewport.scrollTop = scrollToMiddle ?
                        node.position - this.viewportHeight / 2 : // scroll to middle
                        node.position; // scroll to start
                    this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
                }
            }
        }
    };
    TreeVirtualScroll.prototype.getViewportNodes = function (nodes) {
        var _this = this;
        if (!nodes)
            return [];
        var visibleNodes = nodes.filter(function (node) { return !node.isHidden; });
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        var firstIndex = binarySearch(visibleNodes, function (node) {
            return (node.position + Y_OFFSET > _this.y) ||
                (node.position + node.height > _this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        var lastIndex = binarySearch(visibleNodes, function (node) {
            return node.position - Y_OFFSET > _this.y + _this.viewportHeight;
        }, firstIndex);
        var viewportNodes = [];
        for (var i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    };
    TreeVirtualScroll.prototype.fixScroll = function () {
        var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    };
    TreeVirtualScroll.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TreeVirtualScroll.ctorParameters = function () { return [
        { type: TreeModel, },
    ]; };
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "yBlocks", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "x", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "viewportHeight", void 0);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "y", null);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "totalHeight", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "_setYBlocks", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "recalcPositions", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "setViewport", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "scrollIntoView", null);
    return TreeVirtualScroll;
}());
export { TreeVirtualScroll };
function binarySearch(nodes, condition, firstIndex) {
    if (firstIndex === void 0) { firstIndex = 0; }
    var index = firstIndex;
    var toIndex = nodes.length - 1;
    while (index !== toIndex) {
        var midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUMzQyxPQUFPLEVBQUUsVUFBQSxFQUFZLFFBQUEsRUFBVSxNQUFBLEVBQVEsT0FBQSxFQUFTLFFBQUEsRUFBUyxNQUFPLE1BQUEsQ0FBTztBQUN2RSxPQUFPLEVBQUUsU0FBQSxFQUFVLE1BQU8sY0FBQSxDQUFlO0FBQ3pDLE9BQU8sRUFBRSxXQUFBLEVBQVksTUFBTyxxQkFBQSxDQUFzQjtBQUVsRCxJQUFNLFFBQUEsR0FBVyxHQUFBLENBQUksQ0FBQywyRUFBQTtBQUN0QixJQUFNLFNBQUEsR0FBWSxHQUFBLENBQUksQ0FBQSxrRUFBQTtBQUd0QjtJQWdCRSwyQkFBb0IsU0FBb0I7UUFBeEMsaUJBR0M7UUFIbUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWI1QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFXZCxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFYUyxzQkFBSSxnQ0FBQzthQUFMO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRVMsc0JBQUksMENBQVc7YUFBZjtZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFB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S0FQQyxLQUFTLFFBQUEsQ0FBUztnQkFBQyxLQUFBLEdBQVEsT0FBQSxDQUFRO1lBUXhDLElBQUk7Z0JBUEMsS0FBQSxHQUFRLFFBQUEsQ0FBUztRQVF4QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FQQyxLQUFBLENBQU07QUFRZixDQUFDIiwiZmlsZSI6InRyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGFjdGlvbiwgYXV0b3J1biwgcmVhY3Rpb24gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4vdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5jb25zdCBZX09GRlNFVCA9IDUwMDsgLy8gRXh0cmEgcGl4ZWxzIG91dHNpZGUgdGhlIHZpZXdwb3J0LCBpbiBlYWNoIGRpcmVjdGlvbiwgdG8gcmVuZGVyIG5vZGVzIGluXG5jb25zdCBZX0VQU0lMT04gPSAxNTA7IC8vIE1pbmltdW0gcGl4ZWwgY2hhbmdlIHJlcXVpcmVkIHRvIHJlY2FsY3VsYXRlIHRoZSByZW5kZXJlZCBub2Rlc1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlVmlydHVhbFNjcm9sbCB7XG4gIHByaXZhdGUgX2Rpc3Bvc2U6IGFueTtcblxuICBAb2JzZXJ2YWJsZSB5QmxvY2tzID0gMDtcbiAgQG9ic2VydmFibGUgeCA9IDA7XG4gIEBvYnNlcnZhYmxlIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcbiAgdmlld3BvcnQgPSBudWxsO1xuXG4gIEBjb21wdXRlZCBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy55QmxvY2tzICogWV9FUFNJTE9OO1xuICB9XG5cbiAgQGNvbXB1dGVkIGdldCB0b3RhbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwudmlydHVhbFJvb3QgPyB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdC5oZWlnaHQgOiAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlTW9kZWw6IFRyZWVNb2RlbCkge1xuICAgIHRyZWVNb2RlbC52aXJ0dWFsU2Nyb2xsID0gdGhpcztcbiAgICB0aGlzLl9kaXNwb3NlID0gW2F1dG9ydW4oKCkgPT4gdGhpcy5maXhTY3JvbGwoKSldO1xuICB9XG5cbiAgZmlyZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy50cmVlTW9kZWwuZmlyZUV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgZm4gPSB0aGlzLnJlY2FsY1Bvc2l0aW9ucy5iaW5kKHRoaXMpO1xuXG4gICAgZm4oKTtcbiAgICB0aGlzLl9kaXNwb3NlID0gW1xuICAgICAgLi4udGhpcy5fZGlzcG9zZSxcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMudHJlZU1vZGVsLnJvb3RzLCBmbiksXG4gICAgICByZWFjdGlvbigoKSA9PiB0aGlzLnRyZWVNb2RlbC5leHBhbmRlZE5vZGVJZHMsIGZuKSxcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMudHJlZU1vZGVsLmhpZGRlbk5vZGVJZHMsIGZuKVxuICAgIF07XG4gICAgdGhpcy50cmVlTW9kZWwuc3Vic2NyaWJlKFRSRUVfRVZFTlRTLmxvYWROb2RlQ2hpbGRyZW4sIGZuKTtcbiAgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwub3B0aW9ucy51c2VWaXJ0dWFsU2Nyb2xsO1xuICB9XG5cbiAgQGFjdGlvbiBwcml2YXRlIF9zZXRZQmxvY2tzKHZhbHVlKSB7XG4gICAgdGhpcy55QmxvY2tzID0gdmFsdWU7XG4gIH1cblxuICBAYWN0aW9uIHJlY2FsY1Bvc2l0aW9ucygpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdC5oZWlnaHQgPSB0aGlzLl9nZXRQb3NpdGlvbkFmdGVyKHRoaXMudHJlZU1vZGVsLmdldFZpc2libGVSb290cygpLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBvc2l0aW9uQWZ0ZXIobm9kZXMsIHN0YXJ0UG9zKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gc3RhcnRQb3M7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXJOb2RlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIF9nZXRQb3NpdGlvbkFmdGVyTm9kZShub2RlLCBzdGFydFBvcykge1xuICAgIGxldCBwb3NpdGlvbiA9IG5vZGUuZ2V0U2VsZkhlaWdodCgpICsgc3RhcnRQb3M7XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmlzRXhwYW5kZWQpIHsgLy8gVEJEOiBjb25zaWRlciBsb2FkaW5nIGNvbXBvbmVudCBhcyB3ZWxsXG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXIobm9kZS52aXNpYmxlQ2hpbGRyZW4sIHBvc2l0aW9uKTtcbiAgICB9XG4gICAgbm9kZS5oZWlnaHQgPSBwb3NpdGlvbiAtIHN0YXJ0UG9zO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKChkKSA9PiBkKCkpO1xuICB9XG5cbiAgQGFjdGlvbiBzZXRWaWV3cG9ydCh2aWV3cG9ydCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgdmlld3BvcnQsXG4gICAgICB4OiB2aWV3cG9ydC5zY3JvbGxMZWZ0LFxuICAgICAgeUJsb2NrczogTWF0aC5yb3VuZCh2aWV3cG9ydC5zY3JvbGxUb3AgLyBZX0VQU0lMT04pLFxuICAgICAgdmlld3BvcnRIZWlnaHQ6IHZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA/IHZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA6IDBcbiAgICB9KTtcbiAgfVxuXG4gIEBhY3Rpb24gc2Nyb2xsSW50b1ZpZXcobm9kZSwgZm9yY2UsIHNjcm9sbFRvTWlkZGxlID0gdHJ1ZSkge1xuICAgIGlmIChub2RlLm9wdGlvbnMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBub2RlLm9wdGlvbnMuc2Nyb2xsQ29udGFpbmVyO1xuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lclRvcCA9IHNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBjb25zdCBub2RlVG9wID0gdGhpcy52aWV3cG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBub2RlLnBvc2l0aW9uIC0gc2Nyb2xsQ29udGFpbmVyVG9wO1xuXG4gICAgICBpZiAoZm9yY2UgfHwgLy8gZm9yY2Ugc2Nyb2xsIHRvIG5vZGVcbiAgICAgICAgbm9kZVRvcCA8IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfHwgLy8gbm9kZSBpcyBhYm92ZSBzY3JvbGwgY29udGFpbmVyXG4gICAgICAgIG5vZGVUb3AgKyBub2RlLmdldFNlbGZIZWlnaHQoKSA+IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgKyBzY3JvbGxDb250YWluZXJIZWlnaHQpIHsgLy8gbm9kZSBpcyBiZWxvdyBjb250YWluZXJcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbFRvTWlkZGxlID9cbiAgICAgICAgICBub2RlVG9wIC0gc2Nyb2xsQ29udGFpbmVySGVpZ2h0IC8gMiA6IC8vIHNjcm9sbCB0byBtaWRkbGVcbiAgICAgICAgICBub2RlVG9wOyAvLyBzY3JvbGwgdG8gc3RhcnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZvcmNlIHx8IC8vIGZvcmNlIHNjcm9sbCB0byBub2RlXG4gICAgICAgIG5vZGUucG9zaXRpb24gPCB0aGlzLnkgfHwgLy8gbm9kZSBpcyBhYm92ZSB2aWV3cG9ydFxuICAgICAgICBub2RlLnBvc2l0aW9uICsgbm9kZS5nZXRTZWxmSGVpZ2h0KCkgPiB0aGlzLnkgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0KSB7IC8vIG5vZGUgaXMgYmVsb3cgdmlld3BvcnRcbiAgICAgICAgaWYgKHRoaXMudmlld3BvcnQpIHtcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0LnNjcm9sbFRvcCA9IHNjcm9sbFRvTWlkZGxlID9cbiAgICAgICAgICBub2RlLnBvc2l0aW9uIC0gdGhpcy52aWV3cG9ydEhlaWdodCAvIDIgOiAvLyBzY3JvbGwgdG8gbWlkZGxlXG4gICAgICAgICAgbm9kZS5wb3NpdGlvbjsgLy8gc2Nyb2xsIHRvIHN0YXJ0XG5cbiAgICAgICAgICB0aGlzLl9zZXRZQmxvY2tzKE1hdGguZmxvb3IodGhpcy52aWV3cG9ydC5zY3JvbGxUb3AgLyBZX0VQU0lMT04pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFZpZXdwb3J0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm4gW107XG5cbiAgICBjb25zdCB2aXNpYmxlTm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUpID0+ICFub2RlLmlzSGlkZGVuKTtcblxuICAgIGlmICghdGhpcy5pc0VuYWJsZWQoKSkgcmV0dXJuIHZpc2libGVOb2RlcztcblxuICAgIGlmICghdGhpcy52aWV3cG9ydEhlaWdodCB8fCAhdmlzaWJsZU5vZGVzLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gICAgLy8gU2VhcmNoIGZvciBmaXJzdCBub2RlIGluIHRoZSB2aWV3cG9ydCB1c2luZyBiaW5hcnkgc2VhcmNoXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgYmVnaW5uaW5nIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXG4gICAgLy8gT3IgdGhhdCBlbmRzIGFmdGVyIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHZpZXdwb3J0XG4gICAgY29uc3QgZmlyc3RJbmRleCA9IGJpbmFyeVNlYXJjaCh2aXNpYmxlTm9kZXMsIChub2RlKSA9PiB7XG4gICAgICByZXR1cm4gKG5vZGUucG9zaXRpb24gKyBZX09GRlNFVCA+IHRoaXMueSkgfHxcbiAgICAgICAgICAgICAobm9kZS5wb3NpdGlvbiArIG5vZGUuaGVpZ2h0ID4gdGhpcy55KTtcbiAgICB9KTtcblxuICAgIC8vIFNlYXJjaCBmb3IgbGFzdCBub2RlIGluIHRoZSB2aWV3cG9ydCB1c2luZyBiaW5hcnkgc2VhcmNoXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgZW5kIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXG4gICAgY29uc3QgbGFzdEluZGV4ID0gYmluYXJ5U2VhcmNoKHZpc2libGVOb2RlcywgKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlLnBvc2l0aW9uIC0gWV9PRkZTRVQgPiB0aGlzLnkgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0O1xuICAgIH0sIGZpcnN0SW5kZXgpO1xuXG4gICAgY29uc3Qgdmlld3BvcnROb2RlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICB2aWV3cG9ydE5vZGVzLnB1c2godmlzaWJsZU5vZGVzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlld3BvcnROb2RlcztcbiAgfVxuXG4gIGZpeFNjcm9sbCgpIHtcbiAgICBjb25zdCBtYXhZID0gTWF0aC5tYXgoMCwgdGhpcy50b3RhbEhlaWdodCAtIHRoaXMudmlld3BvcnRIZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMueSA8IDApIHRoaXMuX3NldFlCbG9ja3MoMCk7XG4gICAgaWYgKHRoaXMueSA+IG1heFkpIHRoaXMuX3NldFlCbG9ja3MobWF4WSAvIFlfRVBTSUxPTik7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogVHJlZU1vZGVsLCB9LFxuXTtcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoKG5vZGVzLCBjb25kaXRpb24sIGZpcnN0SW5kZXggPSAwKSB7XG4gIGxldCBpbmRleCA9IGZpcnN0SW5kZXg7XG4gIGxldCB0b0luZGV4ID0gbm9kZXMubGVuZ3RoIC0gMTtcblxuICB3aGlsZSAoaW5kZXggIT09IHRvSW5kZXgpIHtcbiAgICBsZXQgbWlkSW5kZXggPSBNYXRoLmZsb29yKChpbmRleCArIHRvSW5kZXgpIC8gMik7XG5cbiAgICBpZiAoY29uZGl0aW9uKG5vZGVzW21pZEluZGV4XSkpIHtcbiAgICAgIHRvSW5kZXggPSBtaWRJbmRleDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoaW5kZXggPT09IG1pZEluZGV4KSBpbmRleCA9IHRvSW5kZXg7XG4gICAgICBlbHNlIGluZGV4ID0gbWlkSW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19