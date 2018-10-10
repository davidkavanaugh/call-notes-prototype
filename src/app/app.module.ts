import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatSnackBarModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { CopybtnComponent } from './buttons/copybtn/copybtn.component';
import { ClearbtnComponent } from './buttons/clearbtn/clearbtn.component';
import { ClearBtnDialogComponent } from './buttons/clearbtn/clear-btn-dialog/clear-btn-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    CopybtnComponent,
    ClearbtnComponent,
    ClearBtnDialogComponent
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
    MatDialogModule

  ],
  entryComponents: [
    ClearBtnDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
