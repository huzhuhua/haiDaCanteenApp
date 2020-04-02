import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductPayPage } from './product-pay.page';

describe('ProductPayPage', () => {
  let component: ProductPayPage;
  let fixture: ComponentFixture<ProductPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
