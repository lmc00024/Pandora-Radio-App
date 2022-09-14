import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootNavBarComponent } from './foot-nav-bar.component';

describe('FootNavBarComponent', () => {
  let component: FootNavBarComponent;
  let fixture: ComponentFixture<FootNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
