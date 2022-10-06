import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersFooterComponent } from './careers-footer.component';

describe('CareersFooterComponent', () => {
  let component: CareersFooterComponent;
  let fixture: ComponentFixture<CareersFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
