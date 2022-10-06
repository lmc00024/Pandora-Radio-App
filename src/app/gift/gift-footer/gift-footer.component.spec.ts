import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFooterComponent } from './gift-footer.component';

describe('GiftFooterComponent', () => {
  let component: GiftFooterComponent;
  let fixture: ComponentFixture<GiftFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
