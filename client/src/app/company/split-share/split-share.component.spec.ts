import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitShareComponent } from './split-share.component';

describe('SplitShareComponent', () => {
  let component: SplitShareComponent;
  let fixture: ComponentFixture<SplitShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
