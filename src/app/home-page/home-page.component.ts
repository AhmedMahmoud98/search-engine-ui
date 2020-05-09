import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedCountryCode = 'us';
  countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
