import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularPhotos } from './popular-photos';

describe('PopularPhotos', () => {
  let component: PopularPhotos;
  let fixture: ComponentFixture<PopularPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPhotos],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularPhotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
