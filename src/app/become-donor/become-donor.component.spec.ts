import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeDonorComponent } from './become-donor.component';

describe('BecomeDonorComponent', () => {
  let component: BecomeDonorComponent;
  let fixture: ComponentFixture<BecomeDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeDonorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
