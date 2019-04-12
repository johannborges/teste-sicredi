import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dragon } from '../models/dragon.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DragonsService {
    constructor(
        private httpClient: HttpClient
    ){}

    getDragons(rawDate: boolean = true): Array<Dragon>{
        let dragonsList = this.httpClient.get<Array<Dragon>>(`${environment.uri}dragon`);
        let dragons = [];

        dragonsList.subscribe((val) => {
            val.forEach((dragon) => {
                if(rawDate && isNaN(new Date(dragon.createdAt).getTime()))
                    dragon.createdAt = "";

                dragons.push(dragon);
            });
        });

        return dragons;
    }
}