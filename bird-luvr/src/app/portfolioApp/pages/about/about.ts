import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-about',
  styleUrls: ['../../portfolio.scss', './about.scss'],
  templateUrl: './about.html',
})
export class About {
  title:string = "About Travis";
}
