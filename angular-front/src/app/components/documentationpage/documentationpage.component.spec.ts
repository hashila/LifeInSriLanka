import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationpageComponent } from './documentationpage.component';

describe('DocumentationpageComponent', () => {
  let component: DocumentationpageComponent;
  let fixture: ComponentFixture<DocumentationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
