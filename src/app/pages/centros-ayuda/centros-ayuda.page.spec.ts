import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentrosAyudaPage } from './centros-ayuda.page';

describe('CentrosAyudaPage', () => {
  let component: CentrosAyudaPage;
  let fixture: ComponentFixture<CentrosAyudaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentrosAyudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
