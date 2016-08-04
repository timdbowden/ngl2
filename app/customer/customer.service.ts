import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return  [          
                    {id: 1, name: 'Batman'},
                    {id: 2, name: 'Superman'},
                    {id: 3, name: 'Wonder Woman'},
                    {id: 4, name: 'Flash'},
                    {id: 5, name: 'Aquaman'}
                ];
    }

}