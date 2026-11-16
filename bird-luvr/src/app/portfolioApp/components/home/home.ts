import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  imports: [Header],
  selector: 'app-home',
  styleUrls: ['../portfolio.scss', './home.scss'],
  templateUrl: './home.html',
})
export class Home {
  title:string = "Travis Linden Reid";
}
