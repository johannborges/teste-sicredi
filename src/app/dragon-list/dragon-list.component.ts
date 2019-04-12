import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../services/dragons.service';
import { Dragon } from '../models/dragon.model';

@Component({
    selector: 'app-dragon-list',
    templateUrl: './dragon-list.component.html',
    styleUrls: ['./dragon-list.component.scss']
})

export class DragonListComponent implements OnInit {
    dragons: Array<Dragon>;

    constructor(
        private dragonsService: DragonsService
    ) {}

    ngOnInit() {
        this.dragonsService.getDragons().subscribe((val) => {
            this.dragons = val;
        });
    }
}