import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFootNavBarComponent } from './secondary-foot-nav-bar.component';

describe('SecondaryFootNavBarComponent', () => {
  let component: SecondaryFootNavBarComponent;
  let fixture: ComponentFixture<SecondaryFootNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryFootNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryFootNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
