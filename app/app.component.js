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
var customer_component_1 = require('./customer/customer.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Meros Angular 2 App';
        this.name = 'Bruce Wayne';
        this.nameColor = 'red';
        this.customers = [
            { id: 1, name: 'Batman' },
            { id: 2, name: 'Superman' },
            { id: 3, name: 'Wonder Woman' },
            { id: 4, name: 'Flash' },
            { id: 5, name: 'Aquaman' },
        ];
    }
    AppComponent.prototype.changeColor = function () {
        this.nameColor = this.nameColor === 'red' ? 'green' : 'red';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/app/app.component.html',
            directives: [customer_component_1.CustomerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map