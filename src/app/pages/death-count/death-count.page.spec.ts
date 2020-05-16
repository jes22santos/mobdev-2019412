import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeathCountPage } from './death-count.page';

describe('DeathCountPage', () => {
  let component: DeathCountPage;
  let fixture: ComponentFixture<DeathCountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathCountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeathCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
