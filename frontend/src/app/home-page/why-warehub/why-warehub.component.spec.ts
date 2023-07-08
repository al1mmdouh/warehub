import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWarehubComponent } from './why-warehub.component';

describe('WhyWarehubComponent', () => {
  let component: WhyWarehubComponent;
  let fixture: ComponentFixture<WhyWarehubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWarehubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWarehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
