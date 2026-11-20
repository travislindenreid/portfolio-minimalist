import { Component, Input } from '@angular/core';
import { ObservationData } from '../../classes/observation-data';

@Component({
  imports: [],
  selector: 'app-map',
  styleUrls: ['../../birdapp.scss', './map.scss'],
  templateUrl: './map.html',
})
export class Map {
  max_lat:number = 35; // top
  min_lat:number = 32; // bottom
  max_long:number = 120; // left
  min_long:number = 116; // right

  @Input() observations:ObservationData[] = [];

  getLeftFromLong(t:number) {
    t = Math.abs(t);
    let val = 100 - ((t - this.min_long) / (this.max_long - this.min_long) * 100);
    //console.log(`${t} => ${val}`);
    return val;
  }

  getTopFromLat(t:number) {
    t = Math.abs(t);
    let val = 100 - ((t - this.min_lat) / (this.max_lat - this.min_lat) * 100);
    //console.log(`${t} => ${val}`);
    return val;
  }

  getStyleFromCoords(long:number, lat:number) {
    return `left:${this.getLeftFromLong(long)}%; top:${this.getTopFromLat(lat)}%`; 
  }
}
