import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageExistComponent } from './no-page-exist.component';

describe('NoPageExistComponent', () => {
  let component: NoPageExistComponent;
  let fixture: ComponentFixture<NoPageExistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPageExistComponent]
    });
    fixture = TestBed.createComponent(NoPageExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
