import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilContentComponent } from './editar-perfil-content.component';

describe('EditarPerfilContentComponent', () => {
  let component: EditarPerfilContentComponent;
  let fixture: ComponentFixture<EditarPerfilContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerfilContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPerfilContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
