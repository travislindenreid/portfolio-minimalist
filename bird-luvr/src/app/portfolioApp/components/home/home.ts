import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-home',
  styleUrls: ['../../portfolio.scss', './home.scss'],
  templateUrl: './home.html',
})
export class Home {
  title:string = "Travis Linden Reid";
}
