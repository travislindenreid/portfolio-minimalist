import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-activities',
  styleUrls: ['../../portfolio.scss', './activities.scss'],
  templateUrl: './activities.html',
})
export class Activities {
  title:string = "Activity Library";
}
