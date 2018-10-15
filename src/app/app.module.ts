import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatSnackBarModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SnackbarComponent } from './home/snackbar/snackbar.component';
import { CopybtnComponent } from './home/buttons/copybtn/copybtn.component';
import { ClearbtnComponent } from './home/buttons/clearbtn/clearbtn.component';
import { ClearBtnDialogComponent } from './home/buttons/clearbtn/clear-btn-dialog/clear-btn-dialog.component';
import { SettingsbtnComponent } from './home/buttons/settingsbtn/settingsbtn.component';
import { SettingsbtnDialogComponent } from './home/buttons/settingsbtn/settingsbtn-dialog/settingsbtn-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    CopybtnComponent,
    ClearbtnComponent,
    ClearBtnDialogComponent,
    SettingsbtnComponent,
    SettingsbtnDialogComponent,
    SettingsComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    AppRoutingModule

  ],
  entryComponents: [
    ClearBtnDialogComponent,
    SettingsbtnDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
