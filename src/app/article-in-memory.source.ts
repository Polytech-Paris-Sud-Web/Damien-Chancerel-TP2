import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article, ArticleCreation } from './models/Article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  private static readonly baseurl: string = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/Damien-Chancerel";

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${ArticleService.baseurl}/articles`);
  }

  public getTopTen(): Observable<Article[]> {
    return this.http.get<Article[]>(`${ArticleService.baseurl}/articles?_page=1?&limit=10`);	
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${ArticleService.baseurl}/articles/${id}`);
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${ArticleService.baseurl}/articles/${id}`);
  }

  public addArticle(article: ArticleCreation): Observable<Article> {
    return this.http.post<Article>(`${ArticleService.baseurl}/articles`, article);
  }

  public searchArticle(keyword: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${ArticleService.baseurl}/articles?q=${keyword}`);
  }
}
