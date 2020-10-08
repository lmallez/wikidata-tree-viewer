import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.scss']
})
export class MainCharacterComponent implements OnInit {
  characterId$: Observable<string>;
  options$: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.characterId$ = this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    );
    this.options$ = this.route.queryParamMap.pipe(
      switchMap(function (params) {
        return of({
          depth: params.get('depth'),
          locale: params.get('locale'),
        });
      }));
    console.log(this.options$);
  }
}
