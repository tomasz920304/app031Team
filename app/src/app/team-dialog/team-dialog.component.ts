import { NotificationComponent } from './../notification/notification.component';
import { TeamService } from './../shared/services/team.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css'],
})
export class TeamDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private notification: MatSnackBar
  ) {}

  formModel: FormGroup;
  get _name() {
    return this.formModel.get('name');
  }

  ngOnInit(): void {
    this.createFormModel();

    //edit
    if (this.data) {
      this.formModel.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.formModel.get('teamId').value === 0) {
      this.createTeam();
    } else {
      this.editTeam();
    }
  }

  createTeam() {
    this.teamService.post(this.formModel.value).subscribe(
      (res) => {
        console.log(res);
        this.showNotification();
      },
      (error) => console.log(error)
    );
  }

  editTeam() {
    this.teamService.put(this.formModel.value).subscribe(
      (res) => {
        console.log(res);
        this.showNotification();
      },
      (error) => console.log(error)
    );
  }

  createFormModel() {
    this.formModel = this.formBuilder.group({
      teamId: [0],
      name: ['', [Validators.required]],
      year: [''],
      city: [''],
      country: [''],
    });
  }

  showNotification() {
    this.notification.openFromComponent(NotificationComponent, {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
