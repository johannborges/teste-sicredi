import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,

        children: [
            {
                path: '',
                redirectTo: 'dragonlist',
                pathMatch: 'full'
            },
        
            {
                path: 'dragonlist',
                component: DragonListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        RouterModule.forChild(routes)
    ],

    declarations: [
        MainComponent,
        DragonListComponent
    ]
})

export class MainModule{}