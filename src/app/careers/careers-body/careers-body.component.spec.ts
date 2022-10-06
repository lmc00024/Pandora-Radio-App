import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersBodyComponent } from './careers-body.component';

describe('CareersBodyComponent', () => {
  let component: CareersBodyComponent;
  let fixture: ComponentFixture<CareersBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
