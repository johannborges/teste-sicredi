import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonFormComponent } from './dragon-form/dragon-form.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,

        children: [
            {
                path: '',
                redirectTo: 'list-dragons',
                pathMatch: 'full'
            },
        
            {
                path: 'list-dragons',
                component: DragonListComponent
            },
        
            {
                path: 'create-dragon',
                component: DragonFormComponent
            },
        
            {
                path: 'edit-dragon/:id',
                component: DragonFormComponent
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
        DragonListComponent,
        DragonFormComponent
    ]
})

export class MainModule{}