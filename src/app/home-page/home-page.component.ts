import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public selectedCountryCode: string = 'eg';
  countryCodes = ['eg', 'us', 'lu', 'de', 'bs', 'br', 'pt'];

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;

  }
  
  constructor(private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    
  }

  onSearchBarFocus(isFocus: boolean) {
    var imageModal = document.getElementById("home-page-image");
    if(isFocus) {
      imageModal.classList.add('home-page-image-focus')
    }
    else {
      imageModal.classList.remove('home-page-image-focus')
    }
    var searchBoxModal = document.getElementById("search-box");
    searchBoxModal
  }

  trendsNavigator(){
    let url = '/trends/';
    this.router.navigate([url], {queryParams: { 'country':   this.selectedCountryCode} });
  }
}
