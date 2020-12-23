import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesTableBodyComponent } from './messages-table-body.component';

describe('MessagesTableBodyComponent', () => {
  let component: MessagesTableBodyComponent;
  let fixture: ComponentFixture<MessagesTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesTableBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
