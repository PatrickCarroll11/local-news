// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'maynooth-post';
// }
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CategoryNavComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <app-category-nav></app-category-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: `
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }

    main {
      min-height: 500px;
    }
  `,
})
export class AppComponent {}
