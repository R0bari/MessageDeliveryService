import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesTableHeaderComponent } from './messages-table-header.component';

describe('MessagesTableHeaderComponent', () => {
  let component: MessagesTableHeaderComponent;
  let fixture: ComponentFixture<MessagesTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
