import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MovieCarouselComponent } from '../../../shared/components/movie-carousel/movie-carousel.component';
import { MovieService } from '../../../shared/services/movie.service';
import { IVideoContent } from '../../../shared/models/video-content.interface';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
  standalone: true,
  imports: [CommonModule, MovieCarouselComponent]
})

export class TrendingComponent implements OnInit {


  movieService = inject(MovieService); // Inject MovieService to fetch movie data
  trendingMovies: IVideoContent[] = [];  // Array to store trending movies

  ngOnInit(): void {
    // Fetch trending movies from the service and update the component state
    this.movieService.getTrendingMovies().subscribe((response) => {
      this.trendingMovies = response.results;
    });
  }
}
