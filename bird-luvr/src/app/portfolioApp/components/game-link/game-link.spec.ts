import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameLink } from './game-link';

describe('GameLink', () => {
  let component: GameLink;
  let fixture: ComponentFixture<GameLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLink],
    }).compileComponents();

    fixture = TestBed.createComponent(GameLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
