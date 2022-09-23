import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirm: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      let reqdata = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      this.userService.registration(reqdata).subscribe((response: any) => {
        console.log("Registration api test", response);
      }), (error: any) => {
        console.log("The error is: ", error);
      }
    }
  }

}