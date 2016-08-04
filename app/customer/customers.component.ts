import { Component, OnInit } from '@angular/core';
import {CustomerComponent} from './customer.component'

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
    
     customers = [          
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Superman'},
        {id: 3, name: 'Wonder Woman'},
        {id: 4, name: 'Flash'},
        {id: 5, name: 'Aquaman'}
    ];
    
    constructor() { }

    ngOnInit() {
       
     }

}