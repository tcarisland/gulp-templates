import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.sass']
})
export class MenuitemComponent implements OnInit {

  static counter = 0;
  @Input() item: string;

  constructor() { }

  ngOnInit(): void {
  }

}
