import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-courselibrary',
  styleUrls: ['../../portfolio.scss', './courselibrary.scss'],
  templateUrl: './courselibrary.html',
})
export class Courselibrary {
  title:string = "Course Library";
}
