import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchDishesPage } from './search-dishes.page';

describe('SearchDishesPage', () => {
  let component: SearchDishesPage;
  let fixture: ComponentFixture<SearchDishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDishesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
