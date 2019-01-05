import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigningAreaComponent } from './designing-area.component';

describe('DesigningAreaComponent', () => {
  let component: DesigningAreaComponent;
  let fixture: ComponentFixture<DesigningAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesigningAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesigningAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
