import { Component, OnInit } from '@angular/core';
import { Font } from 'opentype.js';

@Component({
  selector: 'app-tegnz-main',
  templateUrl: './tegnz-main.component.html',
  styleUrls: ['./tegnz-main.component.sass']
})
export class TegnzMainComponent implements OnInit {

  font: Font;

  constructor() { }
  
  ngOnInit(): void {
  }

}
