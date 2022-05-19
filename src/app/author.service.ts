import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../environments/environment';

import { Author } from './models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private preloadAuthors : Author[] | undefined;

  constructor(private http : HttpClient) { }

  public preloadAuthors$(): Observable<Author[]> {
    if (!this.preloadAuthors) {
      return this.http.get<Author[]>(`${environment.apiUrl}/authors`).pipe(
        map(authors => {
          this.preloadAuthors = authors;
          return authors;
        })
      );
    }
    return of(this.preloadAuthors);
  }

  public getAuthor(name: string): Observable<Author> {
    const defaultAuthor : Author = {
      name: 'Inconnu',
      id: 0,
      bio: 'Pas d\'information sur cet auteur',
    }
    
    return of(this.preloadAuthors?.find(author => author.name === name) || defaultAuthor);
  }
}