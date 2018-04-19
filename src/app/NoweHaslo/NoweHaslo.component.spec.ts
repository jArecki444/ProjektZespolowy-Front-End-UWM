/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoweHasloComponent } from './NoweHaslo.component';

describe('NoweHasloComponent', () => {
  let component: NoweHasloComponent;
  let fixture: ComponentFixture<NoweHasloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoweHasloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoweHasloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
