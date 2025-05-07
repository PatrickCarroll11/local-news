// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-featured-article',
//   standalone: true,
//   imports: [],
//   templateUrl: './featured-article.component.html',
//   styleUrl: './featured-article.component.scss'
// })
// export class FeaturedArticleComponent {

// }

import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.scss'],
})
export class FeaturedArticleComponent {
  @Input() article!: Article;
}
