import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSidebarComponent } from './contact-sidebar.component';

describe('ContactSidebarComponent', () => {
  let component: ContactSidebarComponent;
  let fixture: ComponentFixture<ContactSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
