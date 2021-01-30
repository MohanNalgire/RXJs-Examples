import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpacexService } from './spacex.service';

interface filtersI {
  launch_year: number;
  launch_success: boolean;
  landing_success: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  spaceXLoches = [];
  years: number[];
  launchData: any;
  launchStatus = [true, false];
  filteredLaunchResult: any[];
  emptyFilter: filtersI = {
    launch_year: null,
    launch_success: null,
    landing_success: null,
  };
  currentAppliedFilters: any = {};
  constructor(private spacexService: SpacexService) {}

  range = (start, end, length = end - start + 1) => {
    return Array.from({ length }, (_, i) => start + i);
  };

  fetchData(): void {
    this.spacexService.getSpacexLaunches().subscribe(
      (data: any) => {
        this.spaceXLoches = data;
        this.selectedFilters(null, {});
      },
      (error) => {
        console.error('space x data fetch error:', error);
      },
      () => {
        console.info('space x data fetch completed');
      }
    );
  }

  selectedFilters(event, filter) {
    if (event) {
      const parentULId = event.target.closest('ul').id;
      const nodes = document.getElementById(parentULId).childNodes;
      nodes.forEach((e) => {
        let el = e.childNodes[0] as HTMLElement;
        if (el) {
          el.style.backgroundColor = '#72e572';
        }
      });
      event.target.style.backgroundColor = 'green';
    }
    // Find if the array contains an object by comparing the property value
    const checkProperty =
      this.currentAppliedFilters.hasOwnProperty(Object.keys(filter)[0]) &&
      Object.values(filter)[0]
        ? true
        : false;
    if (checkProperty) {
      if (
        this.currentAppliedFilters[Object.keys(filter)[0]] ===
        Object.values(filter)[0]
      ) {
        // test
      } else {
        this.currentAppliedFilters[Object.keys(filter)[0]] = Object.values(
          filter
        )[0];
      }
      // return (this.filteredLaunchResult = this.spaceXLoches);
    } else if (
      Object.keys(filter).length > 0 &&
      filter.constructor === Object
    ) {
      this.currentAppliedFilters[Object.keys(filter)[0]] = Object.values(
        filter
      )[0];
    }

    this.filteredLaunchResult = this.spaceXLoches.filter((item) => {
      for (var key in this.currentAppliedFilters) {
        if (
          item[key] === undefined ||
          item[key] != this.currentAppliedFilters[key]
        )
          return false;
      }
      return true;
    });
    return this.filteredLaunchResult;
  }

  ngOnInit() {
    this.fetchData();
    this.years = this.range(2010, 2020);
  }

  ngOnDestroy() {}
}
