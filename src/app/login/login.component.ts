import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

userForm: FormGroup;
submitted = false;   
  constructor( private fb: FormBuilder, private router: Router , private storage:LocalStorageService ) {
     
  }
  private userTypeSubscription: Subscription;
  ngOnInit() {

    this.userForm = this.fb.group({
       
        userName: [null, [
          Validators.required,
          Validators.pattern(/^[A-z0-9]*$/),
          Validators.minLength(5)]
        ],
        
        password: [null, [
          Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]
        ]
      });
  }

 
 // get f() { return this.userForm.controls; }



onSubmit()
{
    if(this.userForm.invalid)
    {
        alert("Please Enter username and password");
        return ;
        
    }
    else{
       let user =this.userForm.controls['userName'].value;
     let pass = this.userForm.controls['password'].value;
     // this.authservice.saveValue(this.user, this.pass);
     this.storage.store('userName', user);
     this.storage.store('password', pass);

    this.router.navigate(["/home"]);
    }


}

}
