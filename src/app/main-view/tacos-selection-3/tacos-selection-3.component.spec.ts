import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosSelection3Component } from './tacos-selection-3.component';

describe('TacosSelection3Component', () => {
  let component: TacosSelection3Component;
  let fixture: ComponentFixture<TacosSelection3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosSelection3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosSelection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
