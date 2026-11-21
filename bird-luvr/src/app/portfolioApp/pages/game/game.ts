import { Component, OnInit, signal } from '@angular/core';
import { GameData } from '../../classes/game-data';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game-service';

@Component({
  imports: [Header, Footer],
  selector: 'app-game',
  styleUrls: ['../../portfolio.scss', './game.scss'],
  templateUrl: './game.html',
})
export class Game implements OnInit{
  gameData = signal<GameData>(new GameData());

  constructor(private route:ActivatedRoute, private gameService:GameService) {}

  ngOnInit(): void {
    let pathParam = this.route.snapshot.paramMap.get('path');
    if(pathParam)
    {
      this.gameService.getGame(pathParam).then((game) => {
        console.log(game);
        if(game)
        {
          this.gameData.set(game);
        }
      });
    }
  }
}
