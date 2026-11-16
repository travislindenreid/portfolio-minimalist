import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observation } from './components/observation/observation';
import { RecentSkimmers } from './components/recent-skimmers/recent-skimmers';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Observation, RecentSkimmers, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  
}
