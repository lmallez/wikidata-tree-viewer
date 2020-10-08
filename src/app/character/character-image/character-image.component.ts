import {Component, Input, OnInit} from '@angular/core';
import {WikidataService} from '../../wikidata.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.scss']
})
export class CharacterImageComponent implements OnInit {
  @Input() imageName: string;
  imageUrl$: Observable<any>;

  constructor(private wikidata: WikidataService) { }

  ngOnInit(): void {
    this.imageUrl$ = this.wikidata.getImageUrl(this.imageName);
  }
}
