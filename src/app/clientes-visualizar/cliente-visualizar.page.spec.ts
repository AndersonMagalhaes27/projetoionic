import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesVisualizarPage } from './cliente-visualizar.page';

describe('clientevisualizarpage', () => {
  let component: ClientesVisualizarPage;
  let fixture: ComponentFixture<ClientesVisualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesVisualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesVisualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
