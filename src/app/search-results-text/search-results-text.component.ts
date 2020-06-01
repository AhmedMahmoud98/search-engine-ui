import { Component, OnInit, OnChanges } from '@angular/core';
import { Page } from '../models/page';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results-text',
  templateUrl: './search-results-text.component.html',
  styleUrls: ['./search-results-text.component.css']
})
export class SearchResultsTextComponent implements OnInit {

  /** Array of Result Pages retrieved from the Backend  */
  searchResultsText: Page[] = [];

  query: string;
  userLocation: string;

  public maxSize: number = 5;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  paginationConfig = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 10
  };

  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  constructor(private route: ActivatedRoute, 
                      private searchService: DataService) {
        route.queryParams.subscribe(query => {this.paginationConfig.currentPage = 1, this.pagesRequest()});
    }

  ngOnInit(): void {
  }

  onPageChange(event){
    this.paginationConfig.currentPage = event;
    this.pagesRequest();
  }

  pagesRequest(){
    this.searchResultsText = [];
    this.paginationConfig.totalItems = 0;
      
    this.route.queryParams.subscribe(
      params => this.query = params['query']);
      this.query = this.route.snapshot.queryParamMap.get('query');
    
    this.route.queryParams.subscribe(
      params => this.userLocation = params['country']);
      this.userLocation = this.route.snapshot.queryParamMap.get('country');
  
    this.searchService.getPages(this.query, this.userLocation,
              this.paginationConfig.currentPage.toString()).subscribe(
      list =>  {this.searchResultsText = list.pages, this.paginationConfig.totalItems = list.size} 
    );
  }

  visitedURL(event) 
  {
    var elementId = (event.target as Element).id;
    var url = document.getElementById(elementId).getAttribute("href");
    this.visitedUrlRequest(url);
  }

  visitedUrlRequest(url)
  {
    this.route.queryParams.subscribe(
      params => this.query = params['query']);
      this.query = this.route.snapshot.queryParamMap.get('query');
    
    this.searchService.postVisitedUrl(url, this.query).subscribe();
  }
}
