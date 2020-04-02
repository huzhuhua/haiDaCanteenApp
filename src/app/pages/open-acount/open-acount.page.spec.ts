import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenAcountPage } from './open-acount.page';

describe('OpenAcountPage', () => {
  let component: OpenAcountPage;
  let fixture: ComponentFixture<OpenAcountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenAcountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenAcountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
