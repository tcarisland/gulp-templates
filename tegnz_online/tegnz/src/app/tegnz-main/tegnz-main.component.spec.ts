import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TegnzMainComponent } from './tegnz-main.component';

describe('TegnzMainComponent', () => {
  let component: TegnzMainComponent;
  let fixture: ComponentFixture<TegnzMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TegnzMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TegnzMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
