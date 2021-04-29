import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsComponent } from './pokemons.component';
import { Pokemon } from '../../models/pokemon'

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it(`should have as title 'pokemont'`, () => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    const pokemonsContain = fixture.componentInstance;

   // expect(pokemonsContain.pokemons).toEqual(jasmine.arrayContaining([]));
  });

});
