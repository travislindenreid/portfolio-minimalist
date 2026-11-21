import { Component, OnInit, signal } from '@angular/core';
import { BirdHeader } from '../../components/header/birdHeader';
import { SkimmerSearch } from '../../services/skimmer-search';
import { ObservationData } from '../../classes/observation-data';
import { BirdPhoto } from '../../components/bird-photo/bird-photo';
import { ObservationSearchResults } from '../../classes/observation-search-results';
import { BirdFooter } from '../../components/footer/birdFooter';

@Component({
  imports: [BirdHeader, BirdPhoto, BirdFooter],
  selector: 'app-popular-photos',
  styleUrls: ['../../birdapp.scss', './popular-photos.scss'],
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
