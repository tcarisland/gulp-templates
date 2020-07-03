import { Component, OnInit } from '@angular/core';
import TopnavbarEntry from './topnavbar.entry';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.sass']
})
export class TopnavbarComponent implements OnInit {

  menuItems = [
    "nice",
    "provide",
    "you",
    "solution"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
