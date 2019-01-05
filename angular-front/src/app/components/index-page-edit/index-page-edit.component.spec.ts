import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPageEditComponent } from './index-page-edit.component';

describe('IndexPageEditComponent', () => {
  let component: IndexPageEditComponent;
  let fixture: ComponentFixture<IndexPageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
