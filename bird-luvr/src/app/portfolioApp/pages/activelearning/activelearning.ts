import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-activelearning',
  styleUrls: ['../../portfolio.scss', './activelearning.scss'],
  templateUrl: './activelearning.html',
})
export class Activelearning {
  title:string = "Active Learning";
}
