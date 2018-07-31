import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLeaveDialogComponent } from './approve-leave-dialog.component';

describe('ApproveLeaveDialogComponent', () => {
  let component: ApproveLeaveDialogComponent;
  let fixture: ComponentFixture<ApproveLeaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveLeaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveLeaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
