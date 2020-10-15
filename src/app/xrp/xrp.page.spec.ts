import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XRPPage } from './xrp.page';

describe('XRPPage', () => {
  let component: XRPPage;
  let fixture: ComponentFixture<XRPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XRPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
