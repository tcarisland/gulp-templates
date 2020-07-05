import { Component, OnInit } from '@angular/core';
import { Font } from 'opentype.js';

@Component({
  selector: 'app-tegnz-main',
  templateUrl: './tegnz-main.component.html',
  styleUrls: ['./tegnz-main.component.sass']
})
export class TegnzMainComponent implements OnInit {

  constructor() { }

  onFontLoaded(font: Font) {
    console.log("onFontLoaded called");
    console.log(font);
  }

  ngOnInit(): void {
  }

}
