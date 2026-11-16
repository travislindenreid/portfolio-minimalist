import { Component, OnInit, signal } from '@angular/core';
import { Observation } from '../observation/observation';
import { ObservationData } from '../../classes/observation-data';
import { SkimmerSearch } from '../../services/skimmer-search';
import { Header } from '../header/header';
import { Map } from '../map/map';
import { ObservationSearchResults } from '../../classes/observation-search-results';

@Component({
  imports: [Observation, Header, Map],
  selector: 'app-recent-skimmers',
  styleUrl: './recent-skimmers.scss',
  templateUrl: './recent-skimmers.html',
})
export class RecentSkimmers implements OnInit {
  bird:string = "black skimmers";
  title:string = "SoCal Black Skimmers";
  
  observations = signal<ObservationData[]>([]);
  total_results = signal<number>(0);
  iNatUrl = signal<string>("");

  constructor (private skimmerSearchService:SkimmerSearch) {}

  ngOnInit () {
    this.loadSightings("skimmer");
  }

  loadSightings (birdType:string) {
    this.bird = this.skimmerSearchService.getBirdName(birdType);

    this.skimmerSearchService.getAllRecentSightings(birdType).then((data:ObservationSearchResults) => {
      this.observations.set(data.results);
      this.total_results.set(data.total_results);
      this.iNatUrl.set(this.skimmerSearchService.recentSkimmersINatLinkURL(birdType));
    });
  }
}
