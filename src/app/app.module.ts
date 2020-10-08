import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterImageComponent } from './character/character-image/character-image.component';
import { AppRoutingModule } from './app-routing.module';
import {MainCharacterComponent} from './main-character/main-character.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterImageComponent,
    MainCharacterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
