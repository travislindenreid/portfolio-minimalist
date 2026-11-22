import { Component, Input } from '@angular/core';
import { GameData } from '../../classes/game-data';

@Component({
  imports: [],
  selector: 'app-game-link',
  styleUrl: '../app-icon/app-icon.scss',
  templateUrl: './game-link.html',
})
export class GameLink {
  @Input() gameData:GameData = new GameData();
}