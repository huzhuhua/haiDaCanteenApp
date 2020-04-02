import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalInfomationPage } from './personal-infomation.page';

describe('PersonalInfomationPage', () => {
  let component: PersonalInfomationPage;
  let fixture: ComponentFixture<PersonalInfomationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfomationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfomationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
