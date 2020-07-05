import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glyph-list',
  templateUrl: './glyph-list.component.html',
  styleUrls: ['./glyph-list.component.sass']
})
export class GlyphListComponent implements OnInit {

  glyphs: string[];

  constructor() {
    this.glyphs = [
      "A",
      "B"
    ];
  }

  ngOnInit(): void {
  }

}
