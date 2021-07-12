import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmacosComponent } from './farmacos.component';

describe('FarmacosComponent', () => {
  let component: FarmacosComponent;
  let fixture: ComponentFixture<FarmacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
