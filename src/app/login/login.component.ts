// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   hide:any;
//   constructor() {
//   }
//   ngOnInit(): void {

//   }

//   clickEvent(event: Event): void {
//     this.hide = !this.hide;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true; // Initialize hide to true
  loginForm!: FormGroup ; // Define the FormGroup

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  clickEvent(event: Event): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle form submission logic
    }
    else { 
      console.log('Form is invalid');
    }
  }
}
