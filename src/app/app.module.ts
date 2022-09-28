import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

declare var eruda:any;

import { AppComponent } from './app.component';
import { webXpanelProvider } from './providers/web-xpanel.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: "./"},
    webXpanelProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    eruda.init();
  }
}
