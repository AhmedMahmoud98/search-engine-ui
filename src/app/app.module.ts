import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/services/in-memory-data-service.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { SearchResultsTextComponent } from './search-results-text/search-results-text.component';
import { SearchResultsImagesComponent } from './search-results-images/search-results-images.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    HomePageComponent,
    SearchBoxComponent,
    SearchResultsTextComponent,
    SearchResultsImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    HttpClientModule,
    RouterModule.forChild([
      { path: 'search/:search-query', component:  SearchResultsComponent,
      children: [
        {path: 'all', component: SearchResultsTextComponent},
        {path: 'images', component: SearchResultsImagesComponent},
      ]} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
