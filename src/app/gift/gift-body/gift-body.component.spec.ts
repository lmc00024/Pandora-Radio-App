import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftBodyComponent } from './gift-body.component';

describe('GiftBodyComponent', () => {
  let component: GiftBodyComponent;
  let fixture: ComponentFixture<GiftBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
