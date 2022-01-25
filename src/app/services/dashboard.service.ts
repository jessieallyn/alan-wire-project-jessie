// NEEDS

//Observable/Subject to update UI when this array changes.

// Function to return ONLY the selected Dashboard's contents.
// Function to Delete Selected Item from Selected Dashboard.

import { EventEmitter, Injectable } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardsChanged = new EventEmitter<Dashboard[]>();
  dashboardSelected = new Subject<object>();

  private dashArray: Dashboard[] = [
    {
      name: 'Test 1',
      items: [
        {
          name: 'Graph 1',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg',
        },
        {
          name: 'Graph 2',
          size: 1,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
        },
        {
          name: 'Graph 3',
          size: 2,
          imgPath:
            'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png',
        },
      ],
    },
    {
      name: 'Test 2',
      items: [
        {
          name: 'Graph 2',
          size: 1,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
        },
        {
          name: 'Graph 3',
          size: 2,
          imgPath:
            'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png',
        },
        {
          name: 'Graph 1',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg',
        },
      ],
    },
    {
      name: 'Test 3',
      items: [
        {
          name: 'Graph 3',
          size: 2,
          imgPath:
            'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png',
        },
        {
          name: 'Graph 2',
          size: 1,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
        },
        {
          name: 'Graph 1',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg',
        },
      ],
    },
  ];

  addDashboard = new Subject<void>();

  constructor() {}

  getDashNames(index: number) {
    return this.dashArray[index].name;
  }

  getArray() {
    return this.dashArray.slice();
  }

  createDashboard(name: string) {
    this.dashArray.push({ name: name });
    this.dashboardsChanged.emit(this.dashArray.slice());
  }

  getName(index: number) {
    return this.dashArray[index].name;
  }

  getDashboard(id: number) {
    return this.dashArray.slice()[id];
  }

  addDashItem(index: number) {
    this.dashArray[index].items.push;
  }

  deleteDashItem(index: number, item: number) {
    this.dashArray[index].items.splice(item, 1)
  }

  //This code can be removed once we can render and selected dashboard from the left sidebar.
  private dashboard: DashboardItem[] = [
    new DashboardItem(
      'Test 1',
      3,
      'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg'
    ),
    new DashboardItem(
      'Test 2',
      1,
      'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg'
    ),
    new DashboardItem(
      'Test Table',
      2,
      'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png'
    ),
  ];

  // getDashboard() {
  //   return this.dashboard.slice();
  // }
}
