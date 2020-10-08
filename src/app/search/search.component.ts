import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private router: Router) { }

  entity = 'Q159575';
  depth = 5;
  locale: string;
  navigate(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.entity], {
      queryParams: {depth: this.depth, locale: this.locale}
    }).then();
  }
}
