import { Component, Input } from '@angular/core';
import { ObservationData } from '../../classes/observation-data';

@Component({
  imports: [],
  selector: 'app-bird-photo',
  styleUrl: './bird-photo.scss',
  templateUrl: './bird-photo.html',
})
export class BirdPhoto {
  @Input() observation:ObservationData = new ObservationData();
}
