import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMessageHeaderComponent } from './create-message-header.component';

describe('CreateMessageHeaderComponent', () => {
  let component: CreateMessageHeaderComponent;
  let fixture: ComponentFixture<CreateMessageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMessageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMessageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
