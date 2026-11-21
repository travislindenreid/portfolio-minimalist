import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentSkimmers } from './recent-skimmers';

describe('RecentSkimmers', () => {
  let component: RecentSkimmers;
  let fixture: ComponentFixture<RecentSkimmers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSkimmers],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentSkimmers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
