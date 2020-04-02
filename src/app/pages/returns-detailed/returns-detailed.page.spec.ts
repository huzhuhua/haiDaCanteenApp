import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnsDetailedPage } from './returns-detailed.page';

describe('ReturnsDetailedPage', () => {
  let component: ReturnsDetailedPage;
  let fixture: ComponentFixture<ReturnsDetailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsDetailedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnsDetailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
