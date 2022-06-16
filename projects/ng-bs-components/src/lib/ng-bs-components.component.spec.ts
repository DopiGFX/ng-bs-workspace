import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBsComponentsComponent } from './ng-bs-components.component';

describe('NgBsComponentsComponent', () => {
  let component: NgBsComponentsComponent;
  let fixture: ComponentFixture<NgBsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
