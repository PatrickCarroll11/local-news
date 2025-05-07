// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-category',
//   standalone: true,
//   imports: [],
//   templateUrl: './category.component.html',
//   styleUrl: './category.component.scss'
// })
// export class CategoryComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: string = '';
  articles: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.loadArticles();
    });
  }

  loadArticles(): void {
    this.articleService
      .getArticlesByCategory(this.category)
      .subscribe((articles) => {
        this.articles = articles;
      });
  }
}
