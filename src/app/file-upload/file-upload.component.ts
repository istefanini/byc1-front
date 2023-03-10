
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { MatSnackBar } from '@angular/material/snack-bar';
  

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

    isDragging = false;
    uploading = false;
    uploadedFiles: File[] = [];

    constructor(private fileUploadService: FileUploadService, private http: HttpClient, private snackbar: MatSnackBar) { }
  
    ngOnInit(): void {
    }
  
    onDragOver(event: DragEvent): void {
        event.preventDefault();
        this.isDragging = true;
      }
    
      onDragLeave(event: DragEvent): void {
        event.preventDefault();
        this.isDragging = false;
      }
    
      onDrop(event: any): void {
        event.preventDefault();
        this.isDragging = false;
        this.uploading = true;
        const files = event.dataTransfer?.files;
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
          const file = files[0];
          if (file.size <= 5242880) { // 5 MB
            formData.append('myfilebyc', file);
          }
          this.uploading=true;
        this.http.post(url, formData, { reportProgress: true, observe: 'events' }).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.Response) {
              if (event.status === 200) {
                this.uploadedFiles = Array.from(files);
                this.showSnackBar(event.body.msg, 'success');
              } else {
                this.showSnackBar(event.body.msg, 'error');
              }
              this.uploading = false;
            }
          },
          () => {
            this.showSnackBar('Error al subir el archivo', 'error');
            this.uploading = false;
          }
        );
      }

      showSnackBar(message: string, panelClass: 'success' | 'error') {
        this.snackbar.open(message, 'Cerrar', {
          duration: 6000,
          panelClass: panelClass === 'success' ? 'snackbar-success' : 'snackbar-error',
        });
      }
}




