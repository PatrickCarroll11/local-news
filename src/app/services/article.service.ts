// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ArticleService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Sponsor } from '../models/sponsor.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Maynooth University Announces New Scholarship Program',
      summary: 'Local students to benefit from new €2 million fund',
      content:
        'Maynooth University has announced a new scholarship program worth €2 million aimed at supporting local students. The initiative will provide financial assistance to 50 students from Maynooth and surrounding areas each year. Applications open next month.',
      category: 'breaking',
      date: '2023-05-15',
      author: "Sarah O'Connor",
      isFeatured: true,
      imageUrl: 'assets/images/nuim.jpg',
    },
    {
      id: 2,
      title: 'Maynooth FC Wins County Championship',
      summary:
        'Local football team brings home the trophy after 12-year drought',
      content:
        'In a thrilling final match that went to penalties, Maynooth FC defeated their rivals to claim the county championship. The victory marks the first time in 12 years that the trophy has returned to Maynooth. Celebrations are planned for the town square this weekend.',
      category: 'sports',
      date: '2023-05-14',
      author: 'Mike Reynolds',
      imageUrl: 'assets/images/maynooth_gaa.jpg',
    },
    {
      id: 3,
      title: 'Annual Maynooth Arts Festival Returns Next Month',
      summary: 'Two-week celebration of local arts and culture',
      content:
        "The much-anticipated Maynooth Arts Festival will return next month with an expanded program of events. This year's festival will feature over 50 local artists, musicians, and performers across various venues in the town. Organizers expect record attendance.",
      category: 'events',
      date: '2023-05-12',
      author: 'Emma Walsh',
      imageUrl: 'assets/images/maynooth_arts.jpg',
    },
    {
      id: 4,
      title: 'New Community Center Plans Revealed',
      summary: '€5 million facility to include sports hall and youth center',
      content:
        'Plans for a new state-of-the-art community center in Maynooth have been unveiled. The proposed facility will include a sports hall, youth center, and meeting spaces for local groups. Construction is expected to begin early next year if approved.',
      category: 'news',
      date: '2023-05-10',
      author: 'John Murphy',
      isFeatured: true,
    },
    {
      id: 5,
      title: 'Local Bakery Wins National Award',
      summary: 'Maynooth Bread Basket recognized for traditional sourdough',
      content:
        'Maynooth Bread Basket has won the prestigious National Bakery Award for their traditional sourdough bread. The family-run business has been operating in the town center for over 20 years. Owner Pat Walsh dedicated the award to his late father who founded the bakery.',
      category: 'news',
      date: '2023-05-08',
      author: 'Lisa Byrne',
    },
    {
      id: 6,
      title: 'Roadworks to Cause Delays on Main Street',
      summary: 'Essential utility works scheduled for next week',
      content:
        'Motorists are being warned of potential delays as essential utility works begin on Main Street next Monday. The works, expected to last two weeks, will involve replacing aging water pipes. Alternative routes will be signposted.',
      category: 'breaking',
      date: '2023-05-07',
      author: 'Tom Higgins',
    },
  ];

  private sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Maynooth Bookshop',
      logoUrl: 'assets/images/maynooth_bookshop.png',
      website: 'https://maynoothbookshop.ie',
      description: 'Your local independent bookshop since 1985',
    },
    {
      id: 2,
      name: "Brady's Pub",
      logoUrl: 'assets/images/bradys.jpeg',
      website: 'https://bradyspub.ie',
      description: 'Traditional Irish pub with live music',
    },
    {
      id: 3,
      name: 'Carton House',
      logoUrl: 'assets/images/carton_house.png',
      website: 'https://cartonhouse.ie',
      description: 'Luxury hotel and 5 start Golf Course',
    },
  ];

  getFeaturedArticles() {
    return of(this.articles.filter((article) => article.isFeatured));
  }

  getArticlesByCategory(category: string) {
    return of(this.articles.filter((article) => article.category === category));
  }

  getLatestArticles(limit: number = 4) {
    return of(
      this.articles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit)
    );
  }

  getArticleById(id: number) {
    return of(this.articles.find((article) => article.id === id));
  }

  getSponsors() {
    return of(this.sponsors);
  }
}
