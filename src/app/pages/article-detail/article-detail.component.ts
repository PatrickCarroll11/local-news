// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-article-detail',
//   standalone: true,
//   imports: [],
//   templateUrl: './article-detail.component.html',
//   styleUrl: './article-detail.component.scss'
// })
// export class ArticleDetailComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.loadArticle(id);
    });
  }

  loadArticle(id: number): void {
    this.articleService.getArticleById(id).subscribe((article) => {
      this.article = article;
    });
  }
}
