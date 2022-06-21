import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperCreateComponent } from './shipper-create.component';

describe('ShipperCreateComponent', () => {
  let component: ShipperCreateComponent;
  let fixture: ComponentFixture<ShipperCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
