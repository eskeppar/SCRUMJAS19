import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduChooserComponent } from './edu-chooser.component';

describe('EduChooserComponent', () => {
  let component: EduChooserComponent;
  let fixture: ComponentFixture<EduChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
