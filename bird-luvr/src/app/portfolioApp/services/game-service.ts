import { Injectable } from '@angular/core';
import { GameData } from '../classes/game-data';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GameService {
    gamesFilePath = "/games/games.json";
    
    private gameData: Promise<GameData[]>;

    constructor(private httpClient:HttpClient) {
        this.gameData = this.loadGameData();
    }

    private async loadGameData() {
        return this.httpClient.get(this.gamesFilePath).toPromise().then((data:any) => {
            return data.games;
        })
    }

    public async getAllGames() {
        const data = await this.gameData;
        return data;
    }
}
