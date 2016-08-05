import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { CustomersComponent} from './customer/customers.component'



@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent { 
    title = 'Meros Angular 2 App';
    name = 'Bruce Wayne';
    nameColor = 'red';

    changeColor() {
        this.nameColor = this.nameColor === 'red' ? 'green' : 'red';        
    }

   
}
