import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstOpenPage } from './first-open.page';

describe('FirstOpenPage', () => {
  let component: FirstOpenPage;
  let fixture: ComponentFixture<FirstOpenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstOpenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstOpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
