import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    doLogin(user: String, password: String): Boolean{
        if(user == "teste" && password == "abc123!@#")
            return true;

        else
            return false;
    }
}