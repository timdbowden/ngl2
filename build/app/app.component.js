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
var http_1 = require('@angular/http');
var customers_component_1 = require('./customer/customers.component');
var kurve = require('kurvejs');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Meros Angular 2 App';
        this.name = 'Bruce Wayne';
        this.nameColor = 'red';
        this.isAuthenticated = false;
    }
    AppComponent.prototype.changeColor = function () {
        this.nameColor = this.nameColor === 'red' ? 'green' : 'red';
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        var id = new kurve.Identity('78a8a7f4-2541-4a0b-8b51-128bfd35034d', 'http://localhost:3000/node_modules/kurvejs/dist/login.html', {
            endpointVersion: kurve.EndpointVersion.v1
        });
        id.loginAsync().then(function (_) {
            _this.isAuthenticated = true;
            var graph = new kurve.Graph(id);
            _this.user = graph.me;
            graph.me.photo.GetPhotoImage().then(function (result) {
                _this.photoUrl = result;
                console.log(result);
            });
            graph.me.messages.GetMessages().then(function (data) {
                _this.messages = data.value;
                console.log(_this.messages);
            }, function (err) {
                alert(err.statusText);
            });
            /*graph.me.calendarView.GetEvents().then(result=>{
                this.calendar = graph.me.calendarView;
                console.log(this.calendar);
            }, err=>{
                alert(err.statusText);
            });*/
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [customers_component_1.CustomersComponent],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map