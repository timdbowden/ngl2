import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html',
    styleUrls: ['customer.component.css']
})
export class CustomerComponent implements OnInit {
    
    @Input() customer: {id: number, name: string};
    
    constructor() { }

    ngOnInit() { }

}