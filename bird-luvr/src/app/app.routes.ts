import { Routes } from '@angular/router';
import { Home } from './portfolioApp/pages/home/home';
import { RecentSkimmers } from './birdapp/pages/recent-skimmers/recent-skimmers';
import { PopularPhotos } from './birdapp/pages/popular-photos/popular-photos';
import { Game } from './portfolioApp/pages/game/game';
import { Courselibrary } from './portfolioApp/pages/courselibrary/courselibrary';
import { Activelearning } from './portfolioApp/pages/activelearning/activelearning';
import { Activities } from './portfolioApp/pages/activities/activities';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'recentBirds', component: RecentSkimmers},
    { path: 'popularPhotos', component: PopularPhotos},
    { path: 'games/:path', component: Game},
    { path: 'activeLearning', component: Activelearning},
    { path: 'courseLibrary', component: Courselibrary},
    { path: 'activityLibrary', component: Activities}
];
