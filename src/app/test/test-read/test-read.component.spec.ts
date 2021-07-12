import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReadComponent } from './test-read.component';

describe('TestReadComponent', () => {
  let component: TestReadComponent;
  let fixture: ComponentFixture<TestReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
