import { Component } from '@angular/core';
import { CustomerComponent} from './customer/customer.component'

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [CustomerComponent]
})
export class AppComponent { 
    title = 'Meros Angular 2 App';
    name = 'Bruce Wayne';
    nameColor = 'red';

    changeColor() {
        this.nameColor = this.nameColor === 'red' ? 'green' : 'red';        
    }

    customers = [          
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Superman'},
        {id: 3, name: 'Wonder Woman'},
        {id: 4, name: 'Flash'},
        {id: 5, name: 'Aquaman'},
    ];
}
