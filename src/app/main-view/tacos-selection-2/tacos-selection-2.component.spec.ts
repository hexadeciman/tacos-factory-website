import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosSelection2Component } from './tacos-selection-2.component';

describe('TacosSelection2Component', () => {
  let component: TacosSelection2Component;
  let fixture: ComponentFixture<TacosSelection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosSelection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosSelection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
