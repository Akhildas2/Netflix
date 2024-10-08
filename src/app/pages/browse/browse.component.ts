import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MovieService } from '../../shared/services/movie.service';
import { IVideoContent } from '../../shared/models/video-content.interface';
import { forkJoin, Observable } from 'rxjs';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
  standalone: true,
  imports: [CommonModule, MovieCarouselComponent, BannerComponent, HeaderComponent, FooterComponent]
})


export class BrowseComponent implements OnInit {

  // Inject AuthService and MovieService
  auth = inject(AuthService);
  movieService = inject(MovieService);

  // Input User's name, profile image and email address
  name: string = '';
  userProfileImg: string = '';
  email: string = '';

  // Observable for banner details and banner video
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  // Arrays to hold different types of video content
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];
  latestMovies: IVideoContent[] = [];

  // List of observables for fetching different types of content
  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
    this.movieService.getLatestMovies(),
    this.movieService.getTrendingMovies()

  ]

  ngOnInit(): void {

    // Retrieve logged-in user information from session storage
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      this.name = user.name;
      this.userProfileImg = user.picture;
      this.email = user.email;
    }

    // Fetch all sources
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows, nowPlaying, upcoming, popular, topRated, ratedMovies, latestMovies]) => {
          // Fetch banner details and video based on the movie ID 
          this.bannerDetail$ = this.movieService.getBannerDetail(movies.results[3].id)
          this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[3].id)

          // Return all fetched data
          return { movies, tvShows, nowPlaying, upcoming, popular, topRated, ratedMovies, latestMovies };
        })
      ).subscribe((res: any) => {
        // Assign results to component properties
        this.movies = res.movies.results as IVideoContent[];
        this.tvShows = res.tvShows.results as IVideoContent[];
        this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
        this.upcomingMovies = res.upcoming.results as IVideoContent[];
        this.popularMovies = res.popular.results as IVideoContent[];
        this.topRatedMovies = res.topRated.results as IVideoContent[];
        this.latestMovies = res.latestMovies.results as IVideoContent[];
      })
  }

  // Method to handle user sign-out
  signOut() {
    sessionStorage.removeItem("loggedInUser");// Remove user information from session storage
    this.auth.signOut(); // Call signOut method from AuthService
  }

}
