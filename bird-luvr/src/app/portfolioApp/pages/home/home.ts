import { Component, OnInit, signal } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { GameService } from '../../services/game-service';
import { GameData } from '../../classes/game-data';
import { GameLink } from '../../components/game-link/game-link';
import { AppIcon } from '../../components/app-icon/app-icon';

@Component({
  imports: [Footer, GameLink, AppIcon],
  selector: 'app-home',
  styleUrls: ['../../portfolio.scss', './home.scss'],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  title:string = "Travis Linden Reid";
  time:string = "";

  myGames = signal<GameData[]>([]);
  otherGames = signal<GameData[]>([]);

  constructor(private gameService:GameService) {}

  ngOnInit(): void {
    this.gameService.getGamesWithCategory("mine").then(data => {
      this.myGames.set(data);
    });

    this.gameService.getGamesWithCategory("other").then(data => {
      this.otherGames.set(data);
    });

    this.time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
}
