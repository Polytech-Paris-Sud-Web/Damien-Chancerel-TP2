import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, ArticleCreation } from './models/Article';


export interface ArticleSource {

  getArticles(): Observable<Article[]>;

  getTopTen(): Observable<Article[]> ;

  getArticle(id: number): Observable<Article> ;

  deleteArticle(id: number): Observable<Article> ;

  addArticle(article: ArticleCreation): Observable<Article>;

  searchArticle(keyword: string): Observable<Article[]> ;
}
