import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludaAComponent } from './saluda-a.component';

describe('SaludaAComponent', () => {
  let component: SaludaAComponent;
  let fixture: ComponentFixture<SaludaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
