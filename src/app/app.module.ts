import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';

// Import standalone components and pipes
import { BrowseComponent } from './pages/browse/browse.component';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { ImagePipe } from './shared/pipes/image.pipe';
import { DescriptionPipe } from './shared/pipes/description.pipe';

// Import BrowserAnimationsModule for animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './core/components/faq/faq.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TrendingComponent } from './core/components/trending/trending.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FaqComponent,
    VideoPlayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    // Import BrowserAnimationsModule to support animations
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Adjust position if needed
      timeOut: 3000, // Duration
      extendedTimeOut: 1000, // Duration on hover
      closeButton: true,
      progressBar: true,
      preventDuplicates: true
    }),
    // Import standalone components and pipes
    BrowseComponent,
    MovieCarouselComponent,
    DescriptionPipe,
    ImagePipe,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    FormsModule,
    TrendingComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
