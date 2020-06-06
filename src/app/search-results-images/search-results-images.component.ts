import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';
import { DataService } from '../services/data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results-images',
  templateUrl: './search-results-images.component.html',
  styleUrls: ['./search-results-images.component.css']
})

export class SearchResultsImagesComponent implements OnInit {

  searchResultsImages: Image[] = []
  query: string;
  userLocation: string;
  noResultsFound: boolean;

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  paginationConfig = {
    itemsPerPage: 20,
    currentPage: 1,
    totalItems: this.searchResultsImages.length
  };

  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  imageZoomIn(event)
  {
    var elementId = (event.target as Element).id;
    var modal = document.getElementById(elementId);
    modal.classList.add('transition')
  }

  imageZoomOut(event)
  {
    var elementId = (event.target as Element).id;
    var modal = document.getElementById(elementId);
    modal.classList.remove('transition')
  }

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private searchService: DataService) { 
      route.queryParams.subscribe(query =>{this.paginationConfig.currentPage = 1, this.imagesRequest()});
    }

  ngOnInit(): void {

  }

  onPageChange(event){
    this.paginationConfig.currentPage = event;
    this.imagesRequest();
  }

  imagesRequest(){
    this.searchResultsImages = [];
    this.paginationConfig.totalItems = 0;
    this.noResultsFound = false;
    
    this.route.queryParams.subscribe(
      params => this.query = params['query']);
      this.query = this.route.snapshot.queryParamMap.get('query');

    this.route.queryParams.subscribe(
      params => this.userLocation = params['country']);
      this.userLocation = this.route.snapshot.queryParamMap.get('country');

    this.searchService.getImages(this.query, this.userLocation,
              this.paginationConfig.currentPage.toString()).subscribe(
      list =>  {this.searchResultsImages = list !== null ? list.images: [], 
                this.paginationConfig.totalItems = list !== null ? list.size : 0 ,
                this.noResultsFound = list===null}
    );
  }
  
  visitedURL(event) 
  {
    var elementId = (event.target as Element).parentElement.id;
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
