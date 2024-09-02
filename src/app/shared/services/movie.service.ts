import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM3M2M0Y2JmYmEzNjMwNjJmNDkzN2Y1MjNkNWM3YyIsInN1YiI6IjY2MTM3NjE3OTQwOGVjMDE3ZDJhYmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5aJ7oYH9NZaCAvgUZoHteK-KNvPvcw9C-B47b29iTIg'
  }
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies(){
    return  this.http.get<any>('https://api.themoviedb.org/3/discover/movie',options)
  }
}
