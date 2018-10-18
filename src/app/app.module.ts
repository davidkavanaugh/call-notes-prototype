import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatSnackBarModule, MatIconModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import {MatDialogModule } from '@angular/material/dialog';
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
import { AddbtnComponent } from './settings/buttons/addbtn/addbtn.component';
import { AddbtnDialogComponent } from './settings/buttons/addbtn/addbtn-dialog/addbtn-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddMultipleChoiceComponent } from './settings/buttons/addbtn/add-multiple-choice/add-multiple-choice.component';
import { AddTextInputComponent } from './settings/buttons/addbtn/add-text-input/add-text-input.component';
import { EditbtnComponent } from './settings/buttons/editbtn/editbtn.component';
import { DeletebtnComponent } from './settings/buttons/deletebtn/deletebtn.component';
import { SavebtnComponent } from './settings/buttons/savebtn/savebtn.component';
import { DeletebtnDialogComponent } from './settings/buttons/deletebtn/deletebtn-dialog/deletebtn-dialog.component';
import { EditbtnDialogComponent } from './settings/buttons/editbtn/editbtn-dialog/editbtn-dialog.component';
import { SavebtnDialogComponent } from './settings/buttons/savebtn/savebtn-dialog/savebtn-dialog.component';
import { RestorebtnComponent } from './settings/buttons/restorebtn/restorebtn.component';
import { RestorebtnDialogComponent } from './settings/buttons/restorebtn/restorebtn-dialog/restorebtn-dialog.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { AddAnswerComponent } from './settings/buttons/addbtn/add-multiple-choice/add-answer/add-answer.component';


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
    HomeComponent,
    AddbtnComponent,
    AddbtnDialogComponent,
    AddMultipleChoiceComponent,
    AddTextInputComponent,
    EditbtnComponent,
    DeletebtnComponent,
    SavebtnComponent,
    DeletebtnDialogComponent,
    EditbtnDialogComponent,
    SavebtnDialogComponent,
    RestorebtnComponent,
    RestorebtnDialogComponent,
    AddAnswerComponent
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
    AppRoutingModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatListModule

  ],
  entryComponents: [
    ClearBtnDialogComponent,
    SettingsbtnDialogComponent,
    AddbtnDialogComponent,
    AddMultipleChoiceComponent,
    RestorebtnDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
