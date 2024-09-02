import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MovieService } from '../../shared/services/movie.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit{
 
  auth = inject(AuthService)
  movieService = inject(MovieService)
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res=>{
      console.log(res);
      
    })
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }

}
