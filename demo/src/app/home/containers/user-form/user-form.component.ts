import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  user: User;
  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    color: ['', Validators.required]
  });

  constructor(
    public thisDialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.user =
      data === null || data.user === undefined ? new User() : data.user as User;
    this.userForm.patchValue(this.user);
  }

  onConfirm(): void {
    this.user.name = this.userForm.value.name;
    this.user.color = this.userForm.value.color;

    this.thisDialogRef.close(this.user);
  }
}
