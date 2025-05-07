// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-category-nav',
//   standalone: true,
//   imports: [],
//   templateUrl: './category-nav.component.html',
//   styleUrl: './category-nav.component.scss'
// })
// export class CategoryNavComponent {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss'],
})
export class CategoryNavComponent {
  categories = [
    { name: 'Business Directory', id: 'directory' },
    { name: 'Breaking News', id: 'breaking' },
    { name: 'Sports', id: 'sports' },
    { name: 'Local Events', id: 'events' },
    { name: 'General News', id: 'news' },
  ];
}
