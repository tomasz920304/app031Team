import { TeamDialogComponent } from './../team-dialog/team-dialog.component';
import { Team } from './../shared/models/team.model';
import { TeamService } from './../shared/services/team.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'teamId',
    'name',
    'year',
    'city',
    'country',
    'actions',
  ];

  dataSource: MatTableDataSource<Team>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private teamService: TeamService,
    public dialog: MatDialog,
    private notification: MatSnackBar
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getTeams();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTeams() {
    this.teamService.get().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onOpenDialog(row?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;

    const dialog = this.dialog.open(TeamDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.getTeams();
    });
  }

  onDelete(id) {
    this.teamService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.showNotification();
        this.getTeams();
      },
      (error) => console.log(error)
    );
  }

  showNotification() {
    this.notification.openFromComponent(NotificationComponent, {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
