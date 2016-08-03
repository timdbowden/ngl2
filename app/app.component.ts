import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html'
})
export class AppComponent { 
    title = 'Meros Angular 2 App';
    name = 'Tim';
    nameColor = 'red';

    changeColor(){
        this.nameColor = this.nameColor === 'red' ? 'green' : 'red';        
    }
}
