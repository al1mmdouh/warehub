import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseHomeComponent } from './warehouse-home.component';

describe('WarehouseHomeComponent', () => {
  let component: WarehouseHomeComponent;
  let fixture: ComponentFixture<WarehouseHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseHomeComponent]
    });
    fixture = TestBed.createComponent(WarehouseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
