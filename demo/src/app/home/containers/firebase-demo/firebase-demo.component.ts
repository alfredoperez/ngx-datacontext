import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../core/models/user.model';
import { DataContextService } from '../../../core/services/datacontext.service';
import { MatDialog } from '@angular/material';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-firebase-demo',
  templateUrl: './firebase-demo.component.html',
  styleUrls: ['./firebase-demo.component.scss']
})
export class FirebaseDemoComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private datacontext: DataContextService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.users$ = this.datacontext.users.getAll();
  }

  addUser(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data !== '') {
        this.datacontext.users.create(data);
      }
    });
  }

  editUser(user: any): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data !== '') {
        this.datacontext.users.update(data);
      }
    });
  }

  removeUser(user: any): void {
    this.datacontext.users.remove(user);
  }
}
