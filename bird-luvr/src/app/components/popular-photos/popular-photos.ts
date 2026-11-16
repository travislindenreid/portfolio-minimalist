import { Component, OnInit, signal } from '@angular/core';
import { Header } from '../header/header';
import { SkimmerSearch } from '../../services/skimmer-search';
import { ObservationData } from '../../classes/observation-data';
import { BirdPhoto } from '../bird-photo/bird-photo';
import { ObservationSearchResults } from '../../classes/observation-search-results';

@Component({
  imports: [Header, BirdPhoto],
  selector: 'app-popular-photos',
  styleUrl: './popular-photos.scss',
  templateUrl: './popular-photos.html',
})
export class PopularPhotos implements OnInit {
  title:string = "Popular Black Skimmer Photos";
  bird:string = "black skimmers";

  observations = signal<ObservationData[]>([]);
  iNatUrl = signal<string>("");

  constructor (private skimmerSearchService:SkimmerSearch) {}

  ngOnInit () {
    this.loadSightings("skimmer");
  }

  loadSightings(birdType:string) {
    this.bird = this.skimmerSearchService.getBirdName(birdType);

    this.skimmerSearchService.getRecentPopularPhotos(birdType).then((data:ObservationSearchResults) => {
      this.observations.set(data.results);
      this.iNatUrl.set(this.skimmerSearchService.recentPhotosINatLinkURL(birdType));
    });
  }
}
