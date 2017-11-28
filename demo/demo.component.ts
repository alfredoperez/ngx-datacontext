import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { User } from './models/user.model';
import { DatacontextService } from './services/datacontext.service';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'ngx-demo-app',
  templateUrl: '/demo/demo.component.html'
})
export class DemoComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private datacontext: DatacontextService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.users$ = this.datacontext.users.getAll();
  }

  addUser(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data !== '') this.datacontext.users.create(data);
    });
  }

  editUser(user: any): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data !== '') this.datacontext.users.update(data);
    });
  }

  removeUser(user: any): void {
    this.datacontext.users.remove(user);
  }
}
