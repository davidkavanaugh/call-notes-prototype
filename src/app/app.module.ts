import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { CopybtnComponent } from './buttons/copybtn/copybtn.component';
import { ClearbtnComponent } from './buttons/clearbtn/clearbtn.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';


@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    CopybtnComponent,
    ClearbtnComponent,
    FormFieldsComponent
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
