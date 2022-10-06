import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBottomHeaderComponent } from './login-bottom-header.component';

describe('LoginBottomHeaderComponent', () => {
  let component: LoginBottomHeaderComponent;
  let fixture: ComponentFixture<LoginBottomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBottomHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBottomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
