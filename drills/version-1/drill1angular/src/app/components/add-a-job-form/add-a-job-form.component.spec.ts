import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAJobFormComponent } from './add-a-job-form.component';

describe('AddAJobFormComponent', () => {
  let component: AddAJobFormComponent;
  let fixture: ComponentFixture<AddAJobFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAJobFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
