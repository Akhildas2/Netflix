import { AfterViewInit, Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
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

export class MovieCarouselComponent implements AfterViewInit, OnChanges {
  // Input properties to receive the title and video content list
  @Input() title: string = '';
  @Input() videoContents: IVideoContent[] = [];

  // Track the movie currently hovered over
  selectedContent: string | null = null;

  // ViewChild to reference the Swiper container in the template
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  // Store the Swiper instance once initialized
  swiperInstance: Swiper | null = null;

  constructor(private router: Router) { }

  // Lifecycle hook that runs after the view is initialized
  ngAfterViewInit(): void {
    this.initSwiper(); // Initialize the Swiper after the view is ready
  }

  // Method to initialize the Swiper carousel
  private initSwiper() {
    setTimeout(() => {
      this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: false,
        loop: false,// Disable looping of slides
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',// Selector for next button
          prevEl: '.swiper-button-prev',// Selector for previous button
        },
        breakpoints: {
          // Breakpoints for responsive adjustments
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          }
        }
      });
    }, 100);
  }

  // Lifecycle hook to detect changes to input properties
  ngOnChanges(changes: SimpleChanges) {
    // Check if videoContents input has changed
    if (changes['videoContents'] && !changes['videoContents'].firstChange) {
      if (this.swiperInstance) {
        // If Swiper is already initialized, update its content
        this.swiperInstance.update();
      }
    }
  }

  // Set the title of the movie being hovered over
  setHoverMovie(movie: IVideoContent) {
    this.selectedContent = movie.title ?? movie.name;
  }

  // Clear the hover state when the mouse leaves
  clearHoverMovie() {
    this.selectedContent = null;
  }

  // Handle image click to navigate to the video player for the selected movie
  onImageClick(movie: IVideoContent) {
    this.router.navigate(['/video-player', movie.id]);
  }
}