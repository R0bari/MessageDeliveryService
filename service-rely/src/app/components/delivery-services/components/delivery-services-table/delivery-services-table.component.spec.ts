import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryServicesTableComponent } from './delivery-services-table.component';

describe('DeliveryServicesTableComponent', () => {
  let component: DeliveryServicesTableComponent;
  let fixture: ComponentFixture<DeliveryServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryServicesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
