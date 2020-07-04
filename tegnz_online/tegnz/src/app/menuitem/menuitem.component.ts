import { Component, OnInit, Input, HostListener } from '@angular/core';
import opentype from 'opentype.js';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.sass']
})
export class MenuitemComponent implements OnInit {

  static counter = 0;
  @Input() item: string;
  menuItemId: string;

  onFontLoaded(font: any) {

  }

  @HostListener('change', ['$event'])
  onFileSelected(event: any) {
    //document.getElementById('font-name').innerHTML = '';
    var file = event.target.files[0];
    var reader = new FileReader();
    var font: any;
    reader.onload = function(e) {
      try {
        font = opentype.parse(e.target.result);
        console.log(font);
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
    this.menuItemId = "menuItem" + (MenuitemComponent.counter++);
  }

  ngOnInit(): void {
  }

}
