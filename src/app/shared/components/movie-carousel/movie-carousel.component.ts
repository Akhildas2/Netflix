import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { IVideoContent } from '../../models/video-content.interface';
import { NgFor, NgIf } from '@angular/common';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ImagePipe } from '../../pipes/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
  standalone: true,
  imports: [CommonModule, NgFor, DescriptionPipe, ImagePipe, NgIf],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})

export class MovieCarouselComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() videoContents: IVideoContent[] = [];
  selectedContent: string | null = null;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  swiperInstance: Swiper | null = null;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper() {
    setTimeout(() => {
      this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
        slidesPerView: 3,
        slidesPerGroup: 2,
        centeredSlides: true,
        loop: true,
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 5,
            centeredSlides: true,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 5,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1500: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1800: {
            slidesPerView: 5,
            slidesPerGroup: 6,
            spaceBetween: 5,
            centeredSlides: false,
          }
        }
      });
    }, 100);
  }

  ngOnChanges() {
    if (this.swiperInstance) {
      this.swiperInstance.update();
    }
  }

  setHoverMovie(movie: IVideoContent) {
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie() {
    this.selectedContent = null;
  }

  onImageClick(movie: IVideoContent) {
    this.router.navigate(['/video-player', movie.id]);
  }
}
