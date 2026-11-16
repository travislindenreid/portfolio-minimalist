import { Routes } from '@angular/router';
import { Home } from './portfolioApp/components/home/home';
import { RecentSkimmers } from './birdapp/components/recent-skimmers/recent-skimmers';
import { PopularPhotos } from './birdapp/components/popular-photos/popular-photos';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'recentBirds', component: RecentSkimmers},
    { path: 'popularPhotos', component: PopularPhotos}
];
