import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginFormGroup: FormGroup;
  constructor(private router: Router) {

    this.loginFormGroup = new FormGroup({

      name: new FormControl("", [Validators.required], []),
      pwd: new FormControl("", [Validators.required])

    });

  }

  ngOnInit(): void {
  }

  login() {

    if (this.loginFormGroup.valid) {
      const name = this.loginFormGroup.get("name")?.value;
      const password = this.loginFormGroup.get("pwd")?.value;

      console.log("name", name, "password", password);

      if (name === "anil") {
        this.router.navigate(["/products"]);
      }
    }
    else{
      alert("Invalid values");
    }

  }

}
