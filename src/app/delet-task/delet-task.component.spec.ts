import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletTaskComponent } from './delet-task.component';

describe('DeletTaskComponent', () => {
  let component: DeletTaskComponent;
  let fixture: ComponentFixture<DeletTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletTaskComponent]
    });
    fixture = TestBed.createComponent(DeletTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
