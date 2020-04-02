import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransitionPasswordPage } from './transition-password.page';

describe('TransitionPasswordPage', () => {
  let component: TransitionPasswordPage;
  let fixture: ComponentFixture<TransitionPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransitionPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
