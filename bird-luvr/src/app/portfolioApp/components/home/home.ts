import { Component, OnInit, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { GameService } from '../../services/game-service';
import { GameData } from '../../classes/game-data';

@Component({
  imports: [Header, Footer],
  selector: 'app-home',
  styleUrls: ['../../portfolio.scss', './home.scss'],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  title:string = "Travis Linden Reid";

  gameData = signal<GameData[]>([]);

  constructor(private gameService:GameService) {}

  ngOnInit(): void {
    this.gameService.getJSON().subscribe(data => {
      this.gameData.set(data.games);

      this.gameData().forEach((element:GameData) => {
        console.log(element);
      });
    });
  }
}
