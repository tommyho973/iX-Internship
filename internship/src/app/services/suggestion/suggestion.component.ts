import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Suggestion from 'src/app/models/suggestion';


@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addSuggestionToDb(suggestion: Suggestion) {
    this.http
      .post(this.url + '/feed/suggestion', {
        title: suggestion.title,
        content: suggestion.content,
      })
      .subscribe((postResponse) => {
        console.log(postResponse);
      });
  }

  getSuggestions() {
    return this.http.get(this.url + '/feed/suggestions').toPromise();
  }

  updateSuggestionOnDb(suggestion: Suggestion) {
    this.http.put(this.url + '/feed/' + suggestion.id, {
      title: suggestion.title,
      content: suggestion.content
    }).toPromise();
  }

  deleteSuggestionOnDb(suggestion: Suggestion) {
    const deleteUrl = this.url + '/feed/' + suggestion.id;
    return this.http.delete(deleteUrl).toPromise();
  }
}

