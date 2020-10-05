/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListLogoComponent } from './list-logo.component';

describe('ListLogoComponent', () => {
  let component: ListLogoComponent;
  let fixture: ComponentFixture<ListLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
