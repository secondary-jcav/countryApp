import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalTableComponent } from './capital-table.component';

describe('CapitalTableComponent', () => {
  let component: CapitalTableComponent;
  let fixture: ComponentFixture<CapitalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
