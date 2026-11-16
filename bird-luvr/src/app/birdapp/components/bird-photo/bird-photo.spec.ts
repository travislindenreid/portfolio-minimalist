import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirdPhoto } from './bird-photo';

describe('BirdPhoto', () => {
  let component: BirdPhoto;
  let fixture: ComponentFixture<BirdPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdPhoto],
    }).compileComponents();

    fixture = TestBed.createComponent(BirdPhoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
