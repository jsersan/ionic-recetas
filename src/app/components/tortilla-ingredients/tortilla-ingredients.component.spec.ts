import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TortillaIngredientsComponent } from './tortilla-ingredients.component';

describe('TortillaIngredientsComponent', () => {
  let component: TortillaIngredientsComponent;
  let fixture: ComponentFixture<TortillaIngredientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TortillaIngredientsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TortillaIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
