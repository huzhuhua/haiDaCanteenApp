import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlankCardPage } from './blank-card.page';

describe('BlankCardPage', () => {
  let component: BlankCardPage;
  let fixture: ComponentFixture<BlankCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlankCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
