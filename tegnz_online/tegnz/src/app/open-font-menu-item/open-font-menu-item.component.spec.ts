import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFontMenuItemComponent } from './open-font-menu-item.component';

describe('OpenFontMenuItemComponent', () => {
  let component: OpenFontMenuItemComponent;
  let fixture: ComponentFixture<OpenFontMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenFontMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenFontMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
