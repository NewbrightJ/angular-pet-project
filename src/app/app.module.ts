import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerSearchBoxComponent } from './player-search-box/player-search-box.component';
import { PlayerInfoDisplayBoxComponent } from './player-info-display-box/player-info-display-box.component';
import { CompareButtonComponent } from './compare-button/compare-button.component';
import { PlayerCardComponent } from './player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpServiceComponent,
    PlayerSearchBoxComponent,
    PlayerInfoDisplayBoxComponent,
    CompareButtonComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
