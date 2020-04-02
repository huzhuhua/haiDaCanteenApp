import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BindCardPage } from './bind-card.page';

describe('BindCardPage', () => {
  let component: BindCardPage;
  let fixture: ComponentFixture<BindCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BindCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
