import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedemptionPage } from './redemption.page';

describe('RedemptionPage', () => {
  let component: RedemptionPage;
  let fixture: ComponentFixture<RedemptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedemptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedemptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
