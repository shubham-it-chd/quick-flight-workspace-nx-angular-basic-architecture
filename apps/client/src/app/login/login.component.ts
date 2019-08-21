import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '@quick-flight-workspace/shared';

@Component({
  selector: 'client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.toastrService.success('ThisIsMessage', 'ThisIsTittle');
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['test@test.com', [Validators.required, Validators.email]],
      password: ['test', [Validators.required]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    debugger;
    console.log(this.loginForm);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.f.userName.value,
      this.f.password.value);
    console.log(
      this.authenticationService.login(
        this.f.userName.value,
        this.f.password.value
      )
    );
    //Redirect to User Home Page
  }
}
