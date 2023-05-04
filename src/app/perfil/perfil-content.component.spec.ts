import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContentComponent } from './perfil-content.component';

describe('PerfilContentComponent', () => {
  let component: PerfilContentComponent;
  let fixture: ComponentFixture<PerfilContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
