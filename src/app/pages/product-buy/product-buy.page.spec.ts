import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductBuyPage } from './product-buy.page';

describe('ProductBuyPage', () => {
  let component: ProductBuyPage;
  let fixture: ComponentFixture<ProductBuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBuyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
