import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperAroundModule1Component } from './wrapper-around-module1.component';

describe('WrapperAroundModule1Component', () => {
  let component: WrapperAroundModule1Component;
  let fixture: ComponentFixture<WrapperAroundModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperAroundModule1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperAroundModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
