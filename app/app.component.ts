import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <div [style.color]='nameColor'>Hello {{name}}</div>
                <button (click)='changeColor()'>Change Color</button>
    `
})
export class AppComponent { 
    title = 'Meros Angular 2 App';
    name = 'Tim';
    nameColor = 'red';

    changeColor(){
        this.nameColor = this.nameColor === 'red' ? 'green' : 'red';        
    }
}
