import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeLoginPage } from './code-login.page';

describe('CodeLoginPage', () => {
  let component: CodeLoginPage;
  let fixture: ComponentFixture<CodeLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
