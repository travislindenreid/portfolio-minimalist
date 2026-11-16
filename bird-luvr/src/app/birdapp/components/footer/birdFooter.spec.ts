import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirdFooter } from './birdFooter';

describe('Footer', () => {
  let component: BirdFooter;
  let fixture: ComponentFixture<BirdFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(BirdFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
