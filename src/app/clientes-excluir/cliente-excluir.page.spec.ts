import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesExcluirPage } from './cliente-excluir.page';

describe('ClienteExcluirPage', () => {
  let component: ClientesExcluirPage;
  let fixture: ComponentFixture<ClientesExcluirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesExcluirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesExcluirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
