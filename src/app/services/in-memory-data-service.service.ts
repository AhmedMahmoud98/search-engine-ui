import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {

    const serachResults = [{
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
              is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
            is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
              is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
            is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
          is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
        is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    }, {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    },
    {
      title: "Lock (computer science) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lock_(computer_science)",
      summary: "In computer science, a lock or mutex (from mutual exclusion) \
      is a synchronization mechanism for enforcing limits on access to a resource",
    }]

    return {serachResults};
  }
}
