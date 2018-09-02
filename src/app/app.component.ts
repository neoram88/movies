import { Component } from '@angular/core';
import { GetMoviesDataService } from './get-movies-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  moviesData;
  selectedLanguage;
  sortOrder;
  languages;
  countries;

  constructor(getMovieData: GetMoviesDataService) {
    getMovieData.getMoviesList().subscribe((res) => {
      this.moviesData = res;
      this.languages = _.compact(_.uniq(_.map(this.moviesData, 'language')));
      this.countries = _.compact(_.uniq(_.map(this.moviesData, 'country')));
    });
    this.sortOrder = -1;
  }
  

}
