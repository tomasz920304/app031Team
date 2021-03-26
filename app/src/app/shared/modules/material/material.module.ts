import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MaterialModules = [
  MatTableModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule,
  MatButtonModule,
  MatSortModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: MaterialModules,
  exports: MaterialModules,
})
export class MaterialModule {}
