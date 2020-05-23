import { Component, OnInit, OnChanges } from '@angular/core';
import { Page } from '../models/page';
import { DataService } from '../services/data.service';
import {  Router, ActivatedRoute, RoutesRecognized, RouteConfigLoadStart } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-results-text',
  templateUrl: './search-results-text.component.html',
  styleUrls: ['./search-results-text.component.css']
})
export class SearchResultsTextComponent implements OnInit {

  /** Array of Result Pages retrieved from the Backend  */
  searchResultsText: Page[] = []
  query: string;
  userLocation: string;

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  paginationConfig = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.searchResultsText.length
  };

  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  constructor(private route: ActivatedRoute, 
                      private router: Router, 
                      private searchService: DataService, 
                      location: Location) {
        route.queryParams.subscribe(query => this.pagesRequest());
    }

  ngOnInit(): void {
  }

  onPageChange(event){
    this.paginationConfig.currentPage = event;
    this.pagesRequest();
  }

  pagesRequest(){
    this.route.queryParams.subscribe(
      params => this.query = params['query']);
      this.query = this.route.snapshot.queryParamMap.get('query');
    
    this.route.queryParams.subscribe(
      params => this.userLocation = params['country']);
      this.userLocation = this.route.snapshot.queryParamMap.get('country');
  
    this.searchService.getPages(this.query, this.userLocation,
              this.paginationConfig.currentPage.toString()).subscribe(
      list =>  {this.searchResultsText = list} 
    );
  }

}
