import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAssetsPage } from './my-assets.page';

describe('MyAssetsPage', () => {
  let component: MyAssetsPage;
  let fixture: ComponentFixture<MyAssetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAssetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAssetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
