import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtsScootersComponent } from './gts-scooters.component';

describe('GtsScootersComponent', () => {
  let component: GtsScootersComponent;
  let fixture: ComponentFixture<GtsScootersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GtsScootersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtsScootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
