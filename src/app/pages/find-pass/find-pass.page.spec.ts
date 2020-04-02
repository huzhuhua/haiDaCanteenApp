import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindPassPage } from './find-pass.page';

describe('FindPassPage', () => {
  let component: FindPassPage;
  let fixture: ComponentFixture<FindPassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
