import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-photography',
  styleUrls: ['../../portfolio.scss', './photography.scss'],
  templateUrl: './photography.html',
})
export class Photography {
  title:string = "Photography";
}
