import { GameData } from '../classes/game-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GameService {
    gamesFilePath = "/games/games.json";

    constructor(private httpClient:HttpClient) {}

    public getJSON(): Observable<any> {
        return this.httpClient.get(this.gamesFilePath);
    }
}
