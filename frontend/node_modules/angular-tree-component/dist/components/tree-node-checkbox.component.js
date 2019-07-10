import { Component, Input, ViewEncapsulation } from '@angular/core';
var TreeNodeCheckboxComponent = /** @class */ (function () {
    function TreeNodeCheckboxComponent() {
    }
    TreeNodeCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tree-node-checkbox',
                    encapsulation: ViewEncapsulation.None,
                    styles: [],
                    template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <input\n        class=\"tree-node-checkbox\"\n        type=\"checkbox\"\n        (click)=\"node.mouseAction('checkboxClick', $event)\"\n        [checked]=\"node.isSelected\"\n        [indeterminate]=\"node.isPartiallySelected\"/>\n    </ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    TreeNodeCheckboxComponent.ctorParameters = function () { return []; };
    TreeNodeCheckboxComponent.propDecorators = {
        'node': [{ type: Input },],
    };
    return TreeNodeCheckboxComponent;
}());
export { TreeNodeCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8saUJBQUEsRUFBa0IsTUFBTyxlQUFBLENBQWdCO0FBSXBFO0lBQUE7SUF5QkEsQ0FBQztJQXZCTSxvQ0FBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxNQUFNLEVBQUUsRUFBRTtvQkFDVixRQUFRLEVBQUUsZ1VBU1Q7aUJBQ0YsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLHdDQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0ssd0NBQWMsR0FBMkM7UUFDaEUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7S0FDekIsQ0FBQztJQUNGLGdDQUFDO0NBekJELEFBeUJDLElBQUE7U0F6QlkseUJBQXlCIiwiZmlsZSI6InRyZWUtbm9kZS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ2hlY2tib3hDb21wb25lbnQge1xuICAgbm9kZTogVHJlZU5vZGU7XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNoZWNrYm94JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj1cIntkb250RGV0YWNoOiB0cnVlfVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwidHJlZS1ub2RlLWNoZWNrYm94XCJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgKGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2NoZWNrYm94Q2xpY2snLCAkZXZlbnQpXCJcbiAgICAgICAgW2NoZWNrZWRdPVwibm9kZS5pc1NlbGVjdGVkXCJcbiAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwibm9kZS5pc1BhcnRpYWxseVNlbGVjdGVkXCIvPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbm9kZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==