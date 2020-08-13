import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @Input() title: string;
  @Output() onSubmit = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  Submit(object) {
    // TODO: Use EventEmitter with form value
    // console.log(this.profileForm.value);
    // let email = this.profileForm.value.email
    // let password = this.profileForm.value.password
    let email = object.value.email
    let password = object.value.password
    // console.log(email);
    // console.log(password);
    // console.log('object:   ', object.value);
    // console.log('object:   ', object.value.email);

    this.onSubmit.emit({email, password})
  }

}
