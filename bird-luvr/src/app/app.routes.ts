import { Routes } from '@angular/router';
import { RecentSkimmers } from './components/recent-skimmers/recent-skimmers';
import { PopularPhotos } from './components/popular-photos/popular-photos';

export const routes: Routes = [
    { path: '', component: RecentSkimmers},
    { path: 'recentBirds', component: RecentSkimmers},
    { path: 'popularPhotos', component: PopularPhotos}
];
