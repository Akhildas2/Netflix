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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    // Import BrowserAnimationsModule to support animations
    BrowserAnimationsModule,
    // Import standalone components and pipes
    BrowseComponent,
    MovieCarouselComponent,
    DescriptionPipe,
    ImagePipe,
    HeaderComponent,
    BannerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
