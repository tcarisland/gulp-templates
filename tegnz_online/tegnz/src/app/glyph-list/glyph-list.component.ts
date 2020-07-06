import { Component, OnInit, Input } from '@angular/core';
import { Font } from 'opentype.js';

@Component({
  selector: 'app-glyph-list',
  templateUrl: './glyph-list.component.html',
  styleUrls: ['./glyph-list.component.sass']
})
export class GlyphListComponent implements OnInit {

  font: Font;
  glyphs: string[];

  constructor() {
    this.glyphs = [
      "A",
      "B"
    ];
    this.font = null;
  }

  onFontLoaded(font: Font) {
    console.log("onFontLoaded " + this.constructor.name);
    console.log(font);
    this.font = font;
  }

  ngOnInit(): void {
  }

}
