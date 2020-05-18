import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NgxFlagPickerModule } from 'ngx-flag-picker';

// Http Services
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/services/in-memory-data-service.service';

// Components
import { SearchResultsTextComponent } from './search-results-text/search-results-text.component';
import { SearchResultsImagesComponent } from './search-results-images/search-results-images.component';
import { TrendsHistogramComponent } from './trends-histogram/trends-histogram.component'
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { VoiceRecognitionComponent } from './voice-recognition/voice-recognition.component';


const routes: Routes = [{ path: '', component: HomePageComponent },
                        { path: 'search', component:  SearchResultsComponent,
                            children: [
                              {path: 'all', component: SearchResultsTextComponent},
                              {path: 'images', component: SearchResultsImagesComponent},
                            ]
                        },
                        {path:'trends' , component: TrendsHistogramComponent},
                        {path:'voice' , component: VoiceRecognitionComponent}
                      ]; 

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    HomePageComponent,
    SearchBoxComponent,
    SearchResultsTextComponent,
    SearchResultsImagesComponent,
    TrendsHistogramComponent,
    VoiceRecognitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ChartsModule,
    FormsModule,
    NgxFlagPickerModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
