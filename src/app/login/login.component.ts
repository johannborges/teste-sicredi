import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ){}

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: [null, [
                Validators.required
            ]],

            password: [null, [
                Validators.required,
                Validators.minLength(4)
            ]]
        })
    }

    doLogin(){
        if(this.form.valid){
            let controls = this.form.controls;

            if(this.userService.doLogin(controls.username.value, controls.password.value)){
                localStorage.clear();
                localStorage.setItem("token", "as4d6g5asd46g86sadg65sd4g");

                this.router.navigate(["/dragonlist"]);
            }

            else{
                alert("Credenciais incorretas (dica: o usuário é teste, e a senha é abc123!@#");
            }
        }
    }
}