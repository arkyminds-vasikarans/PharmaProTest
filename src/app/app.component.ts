import {Component} from '@angular/core';
import {DatabaseService} from "./data-access/database.service";
import {User} from "./data-access/entities/user.entity";
import { TranslateService } from '@ngx-translate/core';
// In renderer process (web page).
const { ipcRenderer } = require('electron')

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    users: User[] = [];
    displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Age'];

    firstName: string = '';
    lastName: string = '';
    age: string = '';

    constructor(private databaseService: DatabaseService,translate: TranslateService) {
        this.getUsers();
        translate.setDefaultLang('en');
        translate.use('en');
        console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

        ipcRenderer.on('asynchronous-reply', (event, arg) => {
          console.log(arg) // prints "pong"
        })
        ipcRenderer.send('asynchronous-message', 'ping')
    }

    getUsers(){
        this.databaseService
            .connection
            .then(() => User.find())
            .then(users => {
                this.users = users;
            })
    }

    addUser(){
        const user = new User();

        user.FirstName = this.firstName;
        user.LastName = this.lastName;
        user.Age = +this.age;

        this.databaseService
            .connection
            .then(() => user.save())
            .then(() => {
                this.getUsers();
            })
            .then(() => {
                this.firstName = '';
                this.lastName = '';
                this.age = '';
            })
    }

}
