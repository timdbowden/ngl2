"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var customer_component_1 = require('./customer.component');
var CustomersComponent = (function () {
    function CustomersComponent() {
        this.customers = [
            { id: 1, name: 'Batman' },
            { id: 2, name: 'Superman' },
            { id: 3, name: 'Wonder Woman' },
            { id: 4, name: 'Flash' },
            { id: 5, name: 'Aquaman' }
        ];
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-customers',
            templateUrl: 'customers.component.html',
            directives: [customer_component_1.CustomerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map