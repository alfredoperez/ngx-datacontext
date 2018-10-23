import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Observable } from 'rxjs';
import { User } from '../../../../core/models/user.model';
import { DataContextService } from '../../../../core/services/datacontext.service';

@Component({
  selector: 'app-firebase-demo',
  templateUrl: './firebase-demo.component.html',
  styleUrls: ['./firebase-demo.component.scss']
})
export class FirebaseDemoComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private datacontext: DataContextService
  ) { }

  ngOnInit(): void {
    this.users$ = this.datacontext.users.getAll();
  }

  addUser(): void {

    const user = new User();
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();

    this.datacontext.users.create(user);
  }

  editUser(user: any): void {
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    this.datacontext.users.update(user);
  }

  removeUser(user: any): void {
    this.datacontext.users.remove(user);
  }
}
