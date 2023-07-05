import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseRegisterComponent } from './warehouse-register.component';

describe('WarehouseRegisterComponent', () => {
  let component: WarehouseRegisterComponent;
  let fixture: ComponentFixture<WarehouseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
