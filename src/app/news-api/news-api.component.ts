import { Component, OnInit } from '@angular/core';

import { NewsApiService } from './service/news-api.service';
import { Article, NewsList, TabEvent } from './interface/news-api.interface';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css']
})
export class NewsApiComponent implements OnInit {
  apiKey: string;
  tabMenuItems: string[];
  newsList: Article[];
  constructor(private readonly service: NewsApiService) {
    this.newsList = [];
  }

  ngOnInit() {
    this.apiKey = '1d9c6645b4104462a4d18fd9358f47eb';
    this.tabMenuItems = ['Apple', 'India', 'Cricket', 'Oscar 2k19', 'Technology', 'International'];
    this.getNews('Apple');
  }

  handleChange(event: TabEvent) {
    this.getNews(this.tabMenuItems[event.index]);
  }

  getNews(selectedQuery: string) {
    const param = {
      query: selectedQuery,
      apiKey: this.apiKey
    };
    this.newsList = [];
    this.service.callNewsApi(param).subscribe((data: NewsList) => {
      if (data && data.articles.length > 0) {
        this.newsList = data.articles;
      }
    });
  }
}
