import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordDetailsPage } from './record-details.page';

describe('RecordDetailsPage', () => {
  let component: RecordDetailsPage;
  let fixture: ComponentFixture<RecordDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
