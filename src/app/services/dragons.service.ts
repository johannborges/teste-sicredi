import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    getDragons(): Observable<Array<Dragon>>{
        return this.httpClient.get<Array<Dragon>>(`${environment.uri}dragon`);
    }
}