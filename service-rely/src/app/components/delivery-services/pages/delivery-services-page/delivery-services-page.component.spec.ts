import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryServicesPageComponent } from './delivery-services-page.component';

describe('DeliveryServicesPageComponent', () => {
  let component: DeliveryServicesPageComponent;
  let fixture: ComponentFixture<DeliveryServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryServicesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
