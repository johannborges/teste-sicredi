import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent{
    constructor(
        private router: Router
    ){
        router.events.subscribe((val) => {
            if(val instanceof NavigationEnd &&
                val.url != "/login" &&
                typeof localStorage.token == "undefined"
            ){
                this.router.navigate(["/login"]);
            }
        });
    }
}