import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuMultiplicar } from './menu-multiplicar';

describe('MenuMultiplicar', () => {
  let component: MenuMultiplicar;
  let fixture: ComponentFixture<MenuMultiplicar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuMultiplicar],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMultiplicar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
