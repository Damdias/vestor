import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShareHolderComponent } from './create-share-holder.component';

describe('CreateShareHolderComponent', () => {
  let component: CreateShareHolderComponent;
  let fixture: ComponentFixture<CreateShareHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShareHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShareHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
