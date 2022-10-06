import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersTopFooterComponent } from './careers-top-footer.component';

describe('CareersTopFooterComponent', () => {
  let component: CareersTopFooterComponent;
  let fixture: ComponentFixture<CareersTopFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersTopFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersTopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
