import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { options } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
  }

  getTvShows() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/tv', options);
  }

  getRatedMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options);
  }

  getBannerImage(id: number) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/images`, options);
  }

  getBannerVideo(id: number) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing', options);
  }

  getPopularMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular', options);
  }

  getTopRated() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated', options);
  }

  getUpcomingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming', options);
  }

  getLatestMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/latest', options);
  }

  getTrendingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/trending/movie/week', options);
  }

  getMovieDetails(id: string) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

}