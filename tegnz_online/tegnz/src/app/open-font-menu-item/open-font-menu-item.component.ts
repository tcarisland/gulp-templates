import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import * as opentype from 'opentype.js';
import { Font } from 'opentype.js';

@Component({
  selector: 'app-open-font-menu-item',
  templateUrl: './open-font-menu-item.component.html',
  styleUrls: ['./open-font-menu-item.component.sass']
})
export class OpenFontMenuItemComponent implements OnInit {

  static counter = 0;
  @Input() item: string;
  @Output() fontLoaded = new EventEmitter<Font>();
  menuItemId: string;

  @HostListener('change', ['$event'])
  onFileSelected(event: any) {
    var file = event.target.files[0];
    var reader = new FileReader();
    var font: any;
    var currentInstance = this;
    reader.onload = function(e) {
      try {
        font = opentype.parse(e.target.result);
        currentInstance.fontLoaded.emit(font);
      } catch (err) {
        console.error(err.toString());
      }
    };
    reader.onerror = function(err) {
      console.error(err.toString());
    };
    reader.readAsArrayBuffer(file);
  }

  constructor() {
    this.menuItemId = "openFontMenuItem" + (OpenFontMenuItemComponent.counter++);
  }

  ngOnInit(): void {
  }

}
