import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async, inject, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  // First test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a message with 'warn'", () => {
    expect(component.content).toContain('warn');
  });

  it('should have a severity greate than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  // Esses dois testes falham porque não est[á no Ts e sim no HTMl. Como verificar isso?]
  // it('Should have an img', () => {
  //   expect(component).toContain('<img');
  // });

  // it('Should have an Obiwan img', () => {
  //   expect(component).toContain('obiwan.gif');
  // });

  it("should have an h1 tag of 'Alert button'", () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert button');
  });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the message boolean async', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));
});
