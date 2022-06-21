import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperlistComponent } from './shipperlist.component';

describe('ShipperlistComponent', () => {
  let component: ShipperlistComponent;
  let fixture: ComponentFixture<ShipperlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
