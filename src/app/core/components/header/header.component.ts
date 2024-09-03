import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  @Input({ required: true }) userImg: string = '';
  @Input() name: string = '';
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse By Language"]

}
