import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDiceComponentComponent } from './consumer-dice-component.component';

describe('ConsumerDiceComponentComponent', () => {
  let component: ConsumerDiceComponentComponent;
  let fixture: ComponentFixture<ConsumerDiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerDiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerDiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
