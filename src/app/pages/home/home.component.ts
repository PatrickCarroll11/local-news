// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { FeaturedArticleComponent } from '../../components/featured-article/featured-article.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { SponsorCardComponent } from '../../components/sponsor-card/sponsor-card.component';
import { NewsletterService } from '../../services/newsletter.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FeaturedArticleComponent,
    ArticleCardComponent,
    SponsorCardComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredArticles: any[] = [];
  latestArticles: any[] = [];
  sponsors: any[] = [];

  constructor(
    private articleService: ArticleService,
    private newsletterService: NewsletterService
  ) {}

  ngOnInit(): void {
    this.articleService.getFeaturedArticles().subscribe((articles) => {
      this.featuredArticles = articles;
    });

    this.articleService.getLatestArticles(6).subscribe((articles) => {
      this.latestArticles = articles;
    });

    this.articleService.getSponsors().subscribe((sponsors) => {
      this.sponsors = sponsors;
    });
  }

  newsletterEmail: string = '';

  subscribeNewsletter() {
    // Replace with your actual newsletter service integration
    console.log('Submitting email:', this.newsletterEmail);

    // Example using a hypothetical NewsletterService
    this.newsletterService.subscribe(this.newsletterEmail).subscribe({
      next: () => {
        alert('Thanks for subscribing!');
        this.newsletterEmail = '';
      },
      error: (err: any) => console.error('Subscription failed', err),
    });
  }
}
