import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwayChilComponent } from './away-chil.component';

describe('AwayChilComponent', () => {
  let component: AwayChilComponent;
  let fixture: ComponentFixture<AwayChilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwayChilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwayChilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
