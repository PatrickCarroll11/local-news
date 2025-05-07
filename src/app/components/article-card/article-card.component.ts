// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-article-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './article-card.component.html',
//   styleUrl: './article-card.component.scss'
// })
// export class ArticleCardComponent {

// }
import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent {
  @Input() article!: Article;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
