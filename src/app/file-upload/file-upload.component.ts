
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
  
@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

    isDragging = false;
    uploading = false;
    uploadedFiles: File[] = [];

    constructor(private fileUploadService: FileUploadService, private http: HttpClient) { }
  
    ngOnInit(): void {
    }
  
    onDragOver(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = true;
      }
    
      onDragLeave(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
      }
    
      onDrop(event: any): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
        this.uploading = true;
        const files = event.dataTransfer.files;
        if (files.length > 0) {
              this.uploadFiles(files);
              this.uploading = false;
        }
      }

      clearUploadedFiles(): void {
        this.uploadedFiles = [];
      }

    uploadFiles(files: FileList): void {
        const url = 'http://localhost:3000/sendfilebyc';
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file.size <= 5242880) { // 5 MB
            formData.append('myfilebyc', file);
          }
        }
        this.http.post(url, formData).subscribe((response) => {
          console.log(response);
        });
      }
}




