import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVistaComponent } from './login-vista.component';

describe('LoginVistaComponent', () => {
  let component: LoginVistaComponent;
  let fixture: ComponentFixture<LoginVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
