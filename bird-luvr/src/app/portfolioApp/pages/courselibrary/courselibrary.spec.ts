import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Courselibrary } from './courselibrary';

describe('Courselibrary', () => {
  let component: Courselibrary;
  let fixture: ComponentFixture<Courselibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courselibrary],
    }).compileComponents();

    fixture = TestBed.createComponent(Courselibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
