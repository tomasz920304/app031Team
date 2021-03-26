import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsComponent } from './teams/teams.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [AppComponent, TeamsComponent, TeamDialogComponent, NotificationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
