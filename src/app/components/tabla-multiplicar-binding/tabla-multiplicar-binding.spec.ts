import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarBinding } from './tabla-multiplicar-binding';

describe('TablaMultiplicarBinding', () => {
  let component: TablaMultiplicarBinding;
  let fixture: ComponentFixture<TablaMultiplicarBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
