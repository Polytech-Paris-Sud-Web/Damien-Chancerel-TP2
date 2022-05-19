import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthorComponent } from './author/author.component';
import { TopArticlesComponent } from './top-articles/top-articles.component';


const routes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'author/:name', component: AuthorComponent },
  { path: 'top10', component: TopArticlesComponent },
  { path: '', component: ArticlesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
