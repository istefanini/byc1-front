
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { FileUploadService } from '../file-upload.service';
  
@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
    // Variable to store shortLink from api response
    // shortLink: string = "";
    // loading: boolean = false; // Flag variable
    // file: File = {} as File;


    isDragging = false;
    uploading = false;
    uploadedFiles: File[] = [];


  
    // Inject service 
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
    
    //   onDrop(event: any): void {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     this.isDragging = false;
    //     const files = event.dataTransfer.files;
    //     if (files.length > 0) {
    //       this.uploadFiles(files);
    //     }
    //   }

    onDrop(event: DragEvent): void {
        event.preventDefault();
        this.isDragging = false;
        this.uploading = true;
        const files = Array.from(event.dataTransfer?.files || []);
        for (const file of files) {
          if (file.size < 5242880) { // tamaño máximo de 5 MB
            this.fileUploadService.uploadFile(file).subscribe((response) => {
              this.uploadedFiles.push(file);
              this.uploading = false;
            });
          } else {
            console.log('El archivo es demasiado grande');
            this.uploading = false;
          }
        }
      }
      
      

      clearUploadedFiles(): void {
        this.uploadedFiles = [];
      }
      
      


    // On file Select
    // onChange(event: any) {
    //     this.file = event.target.files[0];
    // }

    uploadFiles(files: FileList): void {
        const url = 'http://localhost:3000/sendfilebyc';
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file.size <= 5242880) { // 5 MB
            formData.append('myfilebyc', file, file.name);
          }
        }
        this.http.post(url, formData).subscribe((response) => {
          console.log(response);
        });
      }
  
    // OnClick of button Upload
    // onUpload() {
    //     this.loading = !this.loading;
    //     console.log(this.file);
    //     this.fileUploadService.upload(this.file).subscribe(
    //         (event: any) => {
    //             if (typeof (event) === 'object') {
  
    //                 // Short link via api response
    //                 this.shortLink = event.link;
  
    //                 this.loading = false; // Flag variable 
    //             }
    //         }
    //     );
    // }
}




