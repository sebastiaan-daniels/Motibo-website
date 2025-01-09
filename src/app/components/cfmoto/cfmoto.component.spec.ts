import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfmotoComponent } from './cfmoto.component';

describe('CfmotoComponent', () => {
  let component: CfmotoComponent;
  let fixture: ComponentFixture<CfmotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfmotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfmotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
