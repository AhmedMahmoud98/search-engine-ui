import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-search-results-images',
  templateUrl: './search-results-images.component.html',
  styleUrls: ['./search-results-images.component.css']
})

export class SearchResultsImagesComponent implements OnInit {

  SearchResultsImages: Image[] = [{

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "../../assets/main2.jpg",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  }, {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://i.picsum.photos/id/448/200/300.jpg",
    //caption: "Hello Image",
  },

  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://i.picsum.photos/id/155/200/300.jpg",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  },
  {

    siteUrl: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    imageUrl: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    //caption: "Hello Image",
  }]

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  paginationConfig = {
    itemsPerPage: 20,
    currentPage: 1,
    totalItems: 19
  };

  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  onPageChange(event){
    this.paginationConfig.currentPage = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

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

}
