import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { MenuitemComponent } from './menuitem/menuitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }