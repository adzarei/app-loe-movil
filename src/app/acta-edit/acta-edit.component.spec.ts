import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaEditComponent } from './acta-edit.component';

describe('ActaEditComponent', () => {
  let component: ActaEditComponent;
  let fixture: ComponentFixture<ActaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
