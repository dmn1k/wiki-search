import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikiSearchComponentComponent } from './wiki-search-component/wiki-search-component.component';
import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WikiSearchComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
