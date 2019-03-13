import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../data-access/database.service';
import { User } from '../../data-access/entities/user.entity';
import { Sku } from '../../data-access/entities/sku.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Age'];

  firstName: string = '';
  lastName: string = '';
  age: string = '';

  constructor(private databaseService: DatabaseService) {
    this.getUsers();
  }

  getUsers() {
    this.databaseService
      .connection
      .then(() => User.find()
      .then(users => {
        this.users = users;
        console.log(users);
      }));
  }

  addUser() {
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

  ngOnInit() {

  }

}
