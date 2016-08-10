import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { CustomersComponent } from './customer/customers.component';
import kurve = require('kurvejs');



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
    isAuthenticated: boolean = false;
    messages : kurve.MessageDataModel[];
    user:kurve.UserDataModel;
    photoUrl: string; 
    calendar: kurve.CalendarView;

    changeColor() {
        this.nameColor = this.nameColor === 'red' ? 'green' : 'red';        
    }

    login() {
        const id = new kurve.Identity('78a8a7f4-2541-4a0b-8b51-128bfd35034d', 
        'http://localhost:3000/node_modules/kurvejs/dist/login.html',
        {
            endpointVersion:kurve.EndpointVersion.v1

        });

        id.loginAsync().then(_ => {
            this.isAuthenticated = true;
            
            const graph = new kurve.Graph(id);
            this.user = graph.me;
            graph.me.photo.GetPhotoImage().then(result=>{
                this.photoUrl = result;
                console.log(result);
            });

            graph.me.messages.GetMessages().then( data =>{
                this.messages = data.value;
                console.log(this.messages)
            });

            graph.me.calendarView.GetEvents().then(result=>{
                this.calendar = graph.me.calendarView;
                console.log(this.calendar);
            })
        })
    }

   
}
