import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsList, NewsRequest } from '../interface/news-api.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private readonly http: HttpClient) { }

  callNewsApi(param: NewsRequest): Observable<NewsList> {
    const url = `https://newsapi.org/v2/everything?q=${param.query}&apiKey=${param.apiKey}`;
    return this.http.get<NewsList>(url);
  }
}
