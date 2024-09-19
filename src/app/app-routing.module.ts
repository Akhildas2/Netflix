import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';

const routes: Routes = [
  {
    path: '',// Default route, maps to the home component
    component: HomeComponent
  },
  {
    path: 'browse',// Route to browse movies or TV shows
    component: BrowseComponent
  },
  {
    path: 'login', // Route to the login page
    component: LoginComponent
  },
  {
    path: 'video-player/:id',// Route to the video player, expects an ID parameter for the movie or show
    component: VideoPlayerComponent
  },
  {
    path: '**', // Wildcard route, redirects to the login page if no route matches
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
