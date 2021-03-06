/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePriceComponent } from './HomePrice.component';

describe('HomePriceComponent', () => {
  let component: HomePriceComponent;
  let fixture: ComponentFixture<HomePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
