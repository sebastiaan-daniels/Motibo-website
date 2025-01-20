import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCardExternComponent } from './bike-card-extern.component';

describe('BikeCardExternComponent', () => {
  let component: BikeCardExternComponent;
  let fixture: ComponentFixture<BikeCardExternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeCardExternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeCardExternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
