import { Component, OnInit } from '@angular/core';
import Suggestion from 'src/app/models/suggestion';
import { SuggestionService } from 'src/app/services/suggestion/suggestion.component';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  suggestion: Suggestion = new Suggestion();
  suggestions: Suggestion[] = [];
  editing: boolean = false;
  constructor(private suggestionService: SuggestionService) { }

  ngOnInit(): void {}

  async addSuggestion() {
    await this.suggestionService.addSuggestionToDb(this.suggestion);
    this.suggestions.push(this.suggestion);
    this.suggestion = new Suggestion();
  }

  async fetchSuggestions() {
    this.suggestions = [];

    let res: any = await this.suggestionService.getSuggestions();

    for (let i = 0; i < res.suggestions.length; i++) {
      const suggestion = new Suggestion();
      
      suggestion.id = res.suggestions[i]._id;
      suggestion.title = res.suggestions[i].title;
      suggestion.content = res.suggestions[i].content;
      suggestion.createdAt = res.suggestions[i].createdAt;
      suggestion.updatedAt = res.suggestions[i].updatedAt;

      this.suggestions.push(suggestion);
    }
  }

 editSuggestion(suggestion: Suggestion) {
    this.editing = true;
    this.suggestion = suggestion;
  }

  async updateSuggestion() {
    await this.suggestionService.updateSuggestionOnDb(this.suggestion);
    this.suggestion = new Suggestion();
    this.editing = false;
  }

  async deleteSuggestion(suggestion: Suggestion) {
    await this.suggestionService.deleteSuggestionOnDb(suggestion);
    this.suggestions = this.suggestions.filter((x) => x.id != suggestion.id);
  }

}
