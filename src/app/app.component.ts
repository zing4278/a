import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './_helpers/must-match.validator';
import { ValidateUrl, ValidateEmail } from './url.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'val';
  
  // registerForm: FormGroup;
  myForm: FormGroup;
    submitted = false;
    constructor(private fb: FormBuilder) {}
    ngOnInit() {
      this.myForm = this.fb.group({
        email: ['', [Validators.required, ValidateEmail]],
        websiteUrl: ['', [Validators.required, ValidateUrl]],
      }
    );
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }
    // ValidateUrl();
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  // this.registerForm.reset();
  }
}