import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { InterceptorModule } from './interceptor/interceptor.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'dragonlist',
        component: DragonListComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DragonListComponent
    ],

    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        InterceptorModule,

        RouterModule.forRoot(
            routes,
            { useHash: true }
        )
    ],

    providers: [HttpClientModule],
    
    bootstrap: [AppComponent]
})

export class AppModule { }