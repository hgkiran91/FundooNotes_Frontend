import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

    // convenience getter for easy access to form fields
    // get f() { return this.forgotForm.controls; }

    onSubmit() {
      this.submitted = true;
  
      if (this.forgotForm.valid) {
        let reqdata = {
          email: this.forgotForm.value.email,
          password: this.forgotForm.value.password
        }
        this.userService.forgot(reqdata).subscribe((response: any) => {
          console.log("ForgotPassword api test", response);
        }), (error: any) => {
          console.log("The error is: ", error);
        }
      }
    }
}
