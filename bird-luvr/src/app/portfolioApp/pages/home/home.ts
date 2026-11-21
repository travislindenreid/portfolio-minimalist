import { Component, OnInit, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { GameService } from '../../services/game-service';
import { GameData } from '../../classes/game-data';
import { GameLink } from '../../components/game-link/game-link';

@Component({
  imports: [Header, Footer, GameLink],
  selector: 'app-home',
  styleUrls: ['../../portfolio.scss', './home.scss'],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  title:string = "Travis Linden Reid";

  gameData = signal<GameData[]>([]);

  constructor(private gameService:GameService) {}

  ngOnInit(): void {
    this.gameService.getAllGames().then(data => {
      this.gameData.set(data);
    });
  }
}
