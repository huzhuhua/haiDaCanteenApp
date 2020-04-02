import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetCodeComponent } from './get-code.component';

describe('GetCodeComponent', () => {
  let component: GetCodeComponent;
  let fixture: ComponentFixture<GetCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCodeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
