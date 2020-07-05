import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TegnzMainComponent } from './tegnz-main/tegnz-main.component';
import { OpenFontMenuItemComponent } from './open-font-menu-item/open-font-menu-item.component';
import { GlyphListComponent } from './glyph-list/glyph-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TegnzMainComponent,
    OpenFontMenuItemComponent,
    GlyphListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
