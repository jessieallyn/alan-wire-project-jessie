// NEEDS

//Observable/Subject to update UI when this array changes.

// Function to return ONLY the selected Dashboard's contents.
// Function to Delete Selected Item from Selected Dashboard.

import { EventEmitter, Injectable } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { Subject } from 'rxjs';
import { DashboardItemService } from './dashboard-item.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  cancelDelete = new EventEmitter();
  deleteDash = new Subject<Dashboard>();
  dashboardDeleted = new EventEmitter();
  dashboardsChanged = new Subject<Dashboard[]>();
  dashboardSelected = new Subject<object>();
  dashboardCleared = new EventEmitter<any>();
  dashboardWasSelected: boolean;
  currDashIdx: number;

  private dashArray: Dashboard[] = [
    {
      name: 'Financial Reports',
      items: [
        {
          name: 'Financial Estimates',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/waterfall-chart-2.jpg',
        },
        {
          name: 'Production Estimates',
          size: 1,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
        },
        {
          name: 'Sales Estimates',
          size: 2,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/types-of-graphs-bar-graph.jpg',
        },
      ],
    },
    {
      name: 'Production Reports',
      items: [
        {
          name: 'Production Estimates',
          size: 1,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
        },
        {
          name: 'Sales Estimates',
          size: 2,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/types-of-graphs-bar-graph.jpg',
        },
        {
          name: 'Financial Estimates',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/waterfall-chart-2.jpg',
        },
      ],
    },
    {
      name: 'Sales Reports',
      items: [
        {
          name: 'Sales Estimates',
          size: 2,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/types-of-graphs-bar-graph.jpg',
        },
        {
          name: 'Production Estimates',
          size: 1,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
        },
        {
          name: 'Financial Estimates',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/waterfall-chart-2.jpg',
        },
      ],
    },
  ];

  addDashboard = new Subject<void>();

  constructor(private dashboardItemService: DashboardItemService) {}

  getDashNames(index: number) {
    return this.dashArray[index].name;
  }

  getArray() {
    return this.dashArray.slice();
  }

  createDashboard(name: string) {
    const newDash: Dashboard = {
      name: name,
      items: []
    };
    this.dashArray.push(newDash);
    this.dashboardsChanged.next(this.dashArray.slice());
  }

  deleteDashboard(index: number) {
    if (index !== -1) {
      this.dashArray.splice(index, 1);
      this.deleteDash.next(this.dashArray[index]);
      this.dashboardsChanged.next(this.dashArray.slice());
    }
  }

  getName(index: number) {
    return this.dashArray[index].name;
  }

  getDashboard(index: number) {
    return this.dashArray.slice()[index];
  }

  addDashItem(dashItem: DashboardItem) {
    this.dashArray[this.currDashIdx].items.push(dashItem);
  }

  deleteDashItem(currItemIdx: number) {
    this.dashArray[this.currDashIdx].items.splice(currItemIdx, 1);
  }
}
