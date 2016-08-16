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
var Rx_1 = require('rxjs/Rx');
var customer_component_1 = require('./customer.component');
var customer_service_1 = require('./customer.service');
var CustomersComponent = (function () {
    function CustomersComponent(_customerService) {
        this._customerService = _customerService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.customers = this._customerService.getCustomers()
            .catch(function (err) {
            console.log(err);
            return Rx_1.Observable.of(function () { return true; });
        });
    };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-customers',
            templateUrl: 'customers.component.html',
            directives: [customer_component_1.CustomerComponent,],
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map