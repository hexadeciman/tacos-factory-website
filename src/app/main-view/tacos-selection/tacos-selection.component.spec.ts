import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosSelectionComponent } from './tacos-selection.component';

describe('TacosSelectionComponent', () => {
  let component: TacosSelectionComponent;
  let fixture: ComponentFixture<TacosSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
