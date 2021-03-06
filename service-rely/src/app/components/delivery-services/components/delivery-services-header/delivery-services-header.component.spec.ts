import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryServicesHeaderComponent } from './delivery-services-header.component';

describe('DeliveryServicesHeaderComponent', () => {
  let component: DeliveryServicesHeaderComponent;
  let fixture: ComponentFixture<DeliveryServicesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryServicesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryServicesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
