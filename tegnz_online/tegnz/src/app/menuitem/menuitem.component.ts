import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.sass']
})
export class MenuitemComponent implements OnInit {

  static counter = 0;
  @Input() item: string;
  menuItemId: string;

  @HostListener('change', ['$event'])
  onFileSelected(event: any) {
    console.log(event);
    const reader = new FileReader();
    reader.onload = e => {
      console.log(e);
      console.log(e.target.result);
    }
    reader.readAsText(event.target.files[0]);
  }

  readFile(contents: string) {

  }

  constructor() {
    this.menuItemId = "menuItem" + (MenuitemComponent.counter++);
  }

  ngOnInit(): void {
  }

}
