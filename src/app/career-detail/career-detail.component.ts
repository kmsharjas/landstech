import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.css'],
})
export class CareerDetailComponent implements OnInit {
  envApiRoot: string = environment.BaseAPIUrl;
  public careerForm: FormGroup;
  fileInfo: string;
  file: any;
  constructor(
    public dataserv: DataService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.careerForm = this.fb.group({
      name: [null],
      email: [null],
      file: [null],
    });
  }

  //----------sorting---Searching----------------
  userFilter: any = {}; //search table filter
  //----------sorting-Searching------------------

  ngOnInit(): void {
    this.dataserv.getDepartments();
  }

  getCategoryById(vl) {
    console.log(vl);
    this.dataserv.getCareerById(vl);
  }

  getCareerByCategory(vl) {
    console.log(vl);
    this.dataserv.getCareerByCategory(vl);
  }

  //upload file
  uploadFile(event) {
    console.log(event.target.files[0]);
    console.log(this.careerForm.value);

    const file = event.target.files[0];
    console.log(file);
    // this.dataserv.uploadFile(file).subscribe(
    //   res=>{
    //     console.log(res);
    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // )
  }
  Submit(val) {
    alert(val.value);
    console.log(val);
    let data = val.value;
    let fileToUpload = <File>this.file;
    const formData = new FormData();
    formData.append('file', fileToUpload, this.file.name);
    formData.append('mail', data.email);
    formData.append('name', fileToUpload, data.name);
    formData.append('jobname', this.dataserv.career.jobname);
    console.log(formData);

    this.http
      .post(this.envApiRoot + '/filesend/', formData)
      .subscribe((res) => {
        console.log(res);
        this.careerForm.reset();
      });
    console.log(val.value);

    let body = {
      name: data.name,
      email: data.email,
      file: data.file,
    };
    console.log(body);
  }

  onFileSelect(input: HTMLInputElement): void {
    /**
     * Format the size to a human readable string
     *
     * @param bytes
     * @returns the formatted string e.g. `105 kB` or 25.6 MB
     */
    function formatBytes(bytes: number): string {
      const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const factor = 1024;
      let index = 0;

      while (bytes >= factor) {
        bytes /= factor;
        index++;
      }

      return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
    }

    this.file = input.files[0];
    console.log(this.file);

    this.fileInfo = `${this.file.name} (${formatBytes(this.file.size)})`;
    console.log(this.fileInfo);
  }
}
