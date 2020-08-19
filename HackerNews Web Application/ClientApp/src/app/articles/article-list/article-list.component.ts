import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


interface Article {
  id: string,
  title: string,
  url: string,
  score: number,
  descendants: number,
  time: string,
  by: string
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles: Article[];
  private articlesData: Article[];

  public sortType: string = "new";
  public feedLoading: boolean = false;
  public p: number = 1;

  private searchBar: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getStories() {
    this.feedLoading = true;
    this.http.get<Article[]>(this.baseUrl + 'articles/' + this.sortType).pipe(
      map((values: Article[]) => values
        .filter(article => article && article.url))
    ).subscribe(values => {
      this.articlesData = values;
      this.articles = values;
      this.feedLoading = false;
    },
      error => console.log(error));
  }

  updateSort(sortType) {
    this.sortType = sortType;
    this.searchBar = "";
    this.getStories();
  }

  onSearch(searchString) {
    console.log(searchString);
    this.articles = this.articlesData;
    if (searchString) {
      this.articles = this.articles.filter(article => article.title.toLowerCase().includes(searchString.toLowerCase()));
    }
  }

  ngOnInit() {
    this.getStories();
  }

}
