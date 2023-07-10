import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWarehouseComponent } from './admin-warehouse.component';

describe('AdminWarehouseComponent', () => {
  let component: AdminWarehouseComponent;
  let fixture: ComponentFixture<AdminWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
