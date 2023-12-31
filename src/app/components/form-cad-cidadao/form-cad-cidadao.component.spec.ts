import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadCidadaoComponent } from './form-cad-cidadao.component';

describe('FormCadCidadaoComponent', () => {
  let component: FormCadCidadaoComponent;
  let fixture: ComponentFixture<FormCadCidadaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadCidadaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCadCidadaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
