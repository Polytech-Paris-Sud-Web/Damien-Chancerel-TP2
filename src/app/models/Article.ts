import {Author} from './Author';

export interface Article {
    title : string;
    content : string;
    author: string;
    id : number;
  }

  export type ArticleCreation = Omit<Article, "id">;