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
    MatCardModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
