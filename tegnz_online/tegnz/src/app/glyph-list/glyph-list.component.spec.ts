import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphListComponent } from './glyph-list.component';

describe('GlyphListComponent', () => {
  let component: GlyphListComponent;
  let fixture: ComponentFixture<GlyphListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyphListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
