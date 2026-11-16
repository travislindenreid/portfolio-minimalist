import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-birdHeader',
  styleUrls: ['../../birdApp.scss', './birdHeader.scss'],
  templateUrl: './birdHeader.html',
})
export class BirdHeader {
  @Input() title:string = "Title";
}
