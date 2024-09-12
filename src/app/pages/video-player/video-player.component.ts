import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../../shared/services/movie.service';
import { IVideoContent } from '../../shared/models/video-content.interface';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoContent?: IVideoContent;
  videoUrl?: SafeResourceUrl;
  imageUrl?: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetails(id).subscribe(video => {
        this.videoContent = video;
        this.setVideoUrl(id);
        this.setImageUrl(video); 
      });
    }
  }

  private setVideoUrl(id: string) {
    this.movieService.getBannerVideo(Number(id)).subscribe(videoData => {
      const key = videoData.results[0]?.key;
      if (key) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&controls=1`);
      }
    });
  }

  private setImageUrl(video: IVideoContent) {
    if (!this.videoUrl) {
      this.imageUrl = `https://image.tmdb.org/t/p/original${video.backdrop_path}`;
    }
  }
}
