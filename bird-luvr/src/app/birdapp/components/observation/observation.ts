import { Component, Input } from '@angular/core';
import { ObservationData } from '../../classes/observation-data';

@Component({
  imports: [],
  selector: 'app-observation',
  styleUrls: ['../../birdApp.scss', './observation.scss'],
  templateUrl: './observation.html',
})
export class Observation {
  @Input() observation:ObservationData = new ObservationData();
}
