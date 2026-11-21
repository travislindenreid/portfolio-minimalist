import { Component, Input, OnInit } from '@angular/core';
import { GameData } from '../../classes/game-data';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game-service';

@Component({
  imports: [Header, Footer],
  selector: 'app-game',
  styleUrl: './game.scss',
  templateUrl: './game.html',
})
export class Game implements OnInit{
  path:string = "";
  
  gameData:GameData = new GameData();
  title:string = this.gameData.name;

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('path');
    if(param)
    {
      this.path = param;
      console.log(`at path: ${this.path}`);
    }
  }
}
