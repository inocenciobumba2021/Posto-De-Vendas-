import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasComponent } from './frutas.component';

describe('FrutasComponent', () => {
  let component: FrutasComponent;
  let fixture: ComponentFixture<FrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
