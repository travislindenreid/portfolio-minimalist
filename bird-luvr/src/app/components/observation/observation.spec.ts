import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observation } from './observation';

describe('Observation', () => {
  let component: Observation;
  let fixture: ComponentFixture<Observation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observation],
    }).compileComponents();

    fixture = TestBed.createComponent(Observation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
