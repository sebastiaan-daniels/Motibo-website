import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePolicyComponent } from './sale-policy.component';

describe('SalePolicyComponent', () => {
  let component: SalePolicyComponent;
  let fixture: ComponentFixture<SalePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalePolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
