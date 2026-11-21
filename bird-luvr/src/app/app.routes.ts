import { Routes } from '@angular/router';
import { Home } from './portfolioApp/pages/home/home';
import { RecentSkimmers } from './birdapp/pages/recent-skimmers/recent-skimmers';
import { PopularPhotos } from './birdapp/pages/popular-photos/popular-photos';
import { Game } from './portfolioApp/pages/game/game';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'recentBirds', component: RecentSkimmers},
    { path: 'popularPhotos', component: PopularPhotos},
    { path: 'games/:path', component: Game}
];
