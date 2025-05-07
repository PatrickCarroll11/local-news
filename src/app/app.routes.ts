// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { DirectoryDetailComponent } from './pages/directory-detail/directory-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'directory/:category', component: DirectoryComponent },
  { path: 'directory/:category/:id', component: DirectoryDetailComponent },
  { path: '**', redirectTo: '' },
];
