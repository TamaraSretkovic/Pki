import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  showErrorMessage = false;
  users: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.users = [
      {
        korisnickoIme: "prodavac",
        lozinka: "prodavac123",
        type: "prodavac"
      },
      {
        korisnickoIme: "kupac",
        lozinka: "kupac123",
        type: "kupac"
      }
    ];
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.showErrorMessage = true;
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.users.forEach(user => {
      if(user.korisnickoIme == username){
        if(user.lozinka == password) {
          console.log('/' + user.type);
          this.router.navigate(['/' + user.type]);
        }
      }
    });

    this.showErrorMessage = true;
    this.loginForm.reset();
  }
}
