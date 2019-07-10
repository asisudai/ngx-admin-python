import { Component, Input, ViewEncapsulation } from '@angular/core';
var TreeNodeContent = /** @class */ (function () {
    function TreeNodeContent() {
    }
    TreeNodeContent.decorators = [
        { type: Component, args: [{
                    selector: 'tree-node-content',
                    encapsulation: ViewEncapsulation.None,
                    template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>",
                },] },
    ];
    /** @nocollapse */
    TreeNodeContent.ctorParameters = function () { return []; };
    TreeNodeContent.propDecorators = {
        'node': [{ type: Input },],
        'index': [{ type: Input },],
        'template': [{ type: Input },],
    };
    return TreeNodeContent;
}());
export { TreeNodeContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBQSxFQUFXLEtBQUEsRUFBTyxpQkFBQSxFQUErQixNQUFPLGVBQUEsQ0FBZ0I7QUFJakY7SUFBQTtJQXdCQSxDQUFDO0lBcEJNLDBCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSx5TkFLTTtpQkFDakIsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDhCQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0ssOEJBQWMsR0FBMkM7UUFDaEUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDM0IsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7S0FDN0IsQ0FBQztJQUNGLHNCQUFDO0NBeEJELEFBd0JDLElBQUE7U0F4QlksZUFBZSIsImZpbGUiOiJ0cmVlLW5vZGUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRlbnQge1xuICAgbm9kZTogVHJlZU5vZGU7XG4gICBpbmRleDogbnVtYmVyO1xuICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNvbnRlbnQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiPnt7IG5vZGUuZGlzcGxheUZpZWxkIH19PC9zcGFuPlxuICA8bmctY29udGFpbmVyXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSwgbm9kZTogbm9kZSwgaW5kZXg6IGluZGV4IH1cIj5cbiAgPC9uZy1jb250YWluZXI+YCxcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidub2RlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2luZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3RlbXBsYXRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19