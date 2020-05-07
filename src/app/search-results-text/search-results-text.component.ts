import { Component, OnInit } from '@angular/core';
import { Page } from '../models/page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-results-text',
  templateUrl: './search-results-text.component.html',
  styleUrls: ['./search-results-text.component.css']
})
export class SearchResultsTextComponent implements OnInit {

  constructor(private searchService: DataService) { }

  ngOnInit(): void {
  }

  /** Array of Result Pages retrieved from the Backend  */
  SearchResultsText: Page[] = [{

    title: "Lock (computer science) - Wikipedia 1",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
            is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 2",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
          is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 3",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
            is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 4",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
          is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 5",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
        is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 6",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 7",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 8",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 9",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 10",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 11",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  }, {
    title: "Lock (computer science) - Wikipedia 12",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 13",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 14",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 15",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
        is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 16",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
        is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 17",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
        is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 18",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
        is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 19",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
        is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 20",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 21",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 22",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 23",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 24",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 25",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  }, {
    title: "Lock (computer science) - Wikipedia 26",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },
  {
    title: "Lock (computer science) - Wikipedia 27",
    url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
    summary: "In computer science, a lock or mutex (from mutual exclusion) \
    is a synchronization mechanism for enforcing limits on access to a resource",
  },]

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  paginationConfig = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 27
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

}
