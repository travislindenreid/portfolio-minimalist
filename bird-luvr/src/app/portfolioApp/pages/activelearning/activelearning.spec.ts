import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Activelearning } from './activelearning';

describe('Activelearning', () => {
  let component: Activelearning;
  let fixture: ComponentFixture<Activelearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activelearning],
    }).compileComponents();

    fixture = TestBed.createComponent(Activelearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
