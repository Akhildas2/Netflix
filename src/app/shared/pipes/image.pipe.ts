import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true
})

export class ImagePipe implements PipeTransform {

  transform(value: any): any {
    // Takes the input value and returns a full URL to the image from TMDb 
    return `https://image.tmdb.org/t/p/w500/${value}`;
  }

}
