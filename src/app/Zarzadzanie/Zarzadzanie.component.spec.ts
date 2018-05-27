/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZarzadzanieComponent } from './Zarzadzanie.component';

describe('ZarzadzanieComponent', () => {
  let component: ZarzadzanieComponent;
  let fixture: ComponentFixture<ZarzadzanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZarzadzanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarzadzanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
