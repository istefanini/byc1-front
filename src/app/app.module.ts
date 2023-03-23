import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';


	
@NgModule({
declarations: [
	AppComponent,
	FileUploadComponent,
],
imports: [
	BrowserModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
	MatSnackBarModule,
	MatStepperModule,
	MatInputModule,
	MatFormFieldModule,
	ReactiveFormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
