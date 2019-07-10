import { Component, Input, ViewEncapsulation } from '@angular/core';
var TreeNodeDropSlot = /** @class */ (function () {
    function TreeNodeDropSlot() {
    }
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    };
    TreeNodeDropSlot.prototype.allowDrop = function (element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    };
    TreeNodeDropSlot.decorators = [
        { type: Component, args: [{
                    selector: 'TreeNodeDropSlot, tree-node-drop-slot',
                    encapsulation: ViewEncapsulation.None,
                    styles: [],
                    template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\">\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    TreeNodeDropSlot.ctorParameters = function () { return []; };
    TreeNodeDropSlot.propDecorators = {
        'node': [{ type: Input },],
        'dropIndex': [{ type: Input },],
    };
    return TreeNodeDropSlot;
}());
export { TreeNodeDropSlot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFBLEVBQVcsS0FBQSxFQUFPLGlCQUFBLEVBQWtCLE1BQU8sZUFBQSxDQUFnQjtBQUlwRTtJQUFBO0lBbUNBLENBQUM7SUEvQkMsaUNBQU0sR0FBTixVQUFPLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDcEIsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUNJLDJCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLE1BQU0sRUFBRSxFQUFFO29CQUNWLFFBQVEsRUFBRSxrSkFNVDtpQkFDRixFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsK0JBQWMsR0FBbUUsY0FBTSxPQUFBLEVBQzdGLEVBRDZGLENBQzdGLENBQUM7SUFDSywrQkFBYyxHQUEyQztRQUNoRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUMxQixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtLQUM5QixDQUFDO0lBQ0YsdUJBQUM7Q0FuQ0QsQUFtQ0MsSUFBQTtTQW5DWSxnQkFBZ0IiLCJmaWxlIjoidHJlZS1ub2RlLWRyb3Atc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlRHJvcFNsb3Qge1xuICAgbm9kZTogVHJlZU5vZGU7XG4gICBkcm9wSW5kZXg6IG51bWJlcjtcblxuICBvbkRyb3AoJGV2ZW50KSB7XG4gICAgdGhpcy5ub2RlLm1vdXNlQWN0aW9uKCdkcm9wJywgJGV2ZW50LmV2ZW50LCB7XG4gICAgICBmcm9tOiAkZXZlbnQuZWxlbWVudCxcbiAgICAgIHRvOiB7IHBhcmVudDogdGhpcy5ub2RlLCBpbmRleDogdGhpcy5kcm9wSW5kZXggfVxuICAgIH0pO1xuICB9XG5cbiAgYWxsb3dEcm9wKGVsZW1lbnQsICRldmVudCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUub3B0aW9ucy5hbGxvd0Ryb3AoZWxlbWVudCwgeyBwYXJlbnQ6IHRoaXMubm9kZSwgaW5kZXg6IHRoaXMuZHJvcEluZGV4IH0sICRldmVudCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdUcmVlTm9kZURyb3BTbG90LCB0cmVlLW5vZGUtZHJvcC1zbG90JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5vZGUtZHJvcC1zbG90XCJcbiAgICAgICh0cmVlRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiXG4gICAgICBbdHJlZUFsbG93RHJvcF09XCJhbGxvd0Ryb3AuYmluZCh0aGlzKVwiPlxuICAgIDwvZGl2PlxuICBgXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbm9kZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidkcm9wSW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=