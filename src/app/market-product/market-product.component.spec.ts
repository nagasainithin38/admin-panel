import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProductComponent } from './market-product.component';

describe('MarketProductComponent', () => {
  let component: MarketProductComponent;
  let fixture: ComponentFixture<MarketProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketProductComponent]
    });
    fixture = TestBed.createComponent(MarketProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
