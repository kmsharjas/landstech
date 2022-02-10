import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  envApiRoot: string = environment.BaseAPIUrl;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: [null,Validators.required],
      email: [null],
      number: [null],
      subject: [null],
      message: [null],
    });
  }

  ngOnInit(): void {}
  Submit(val) {
    console.log(val.value);
    let data=val.value;
    let body={
      name: data.name,
      email: data.email,
      number: data.number,
      subject: data.subject,
      message: data.message,
    }
    console.log(body);

    this.http.post(this.envApiRoot + '/contactemailsend/', body).subscribe((res) => {
      console.log(res);
      this.contactForm.reset();
    });
  }
}
