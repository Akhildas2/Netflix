import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})

export class DescriptionPipe implements PipeTransform {

  transform(value: string, args?: number): any {

    // If args is provided, truncate the string up to that number and append '...'
    return `${value.substring(0, args)}...`
  }

}
