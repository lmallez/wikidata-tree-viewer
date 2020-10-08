import {Component, Input, OnInit} from '@angular/core';
import {WikidataService} from '../wikidata.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() characterId: string;
  @Input() maxDepth = 5;
  @Input() depth = 0;
  @Input() locale = 'en';

  character$: Observable<any>;

  constructor(private wikidata: WikidataService, private router: Router) { }

  ngOnInit(): void {
    this.character$ = this.wikidata.getEntity(this.characterId);
  }

  labelsLocale(labels): any {
    return labels[this.locale] ?? labels.en ?? labels[Object.keys(labels)[0]];
  }

  navigate(entityId): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([entityId], {
      queryParams: {depth: this.maxDepth, locale: this.locale}
    }).then();
  }
}
