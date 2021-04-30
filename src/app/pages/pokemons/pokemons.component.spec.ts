import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { PokemonsComponent } from './pokemons.component';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TranslateService } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SearchComponent } from '../../components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;
  let mockPokemonService: PokemonService;

  const pokemonMock = {
    id: "TEST_ID",
    name: "TEST_NAME",
    types: ["TEST_TYPES"],
    images: {
      large: "",
      small: "src/assets/img/card-test.png"
    },
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsComponent, SearchComponent],
      imports: [
        TranslateTestingModule.withTranslations({ pt: require('src/assets/i18n/pt.json'), en: require('src/assets/i18n/en.json') }),
        HttpClientTestingModule ,
        LazyLoadImageModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            queryParams: { id: pokemonMock.id },
          },
        },
      }
    ],
    })
    .compileComponents();
    mockPokemonService = TestBed.inject(PokemonService);
  }));

  afterEach(() => {
    fixture.destroy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    fixture.componentInstance.pokemons = [pokemonMock];
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list pokemon', inject([TranslateService], (translateService: TranslateService) => {
    const compiled = fixture.debugElement.nativeElement;
    const list = compiled.querySelector('#list-pokemon');
    
    expect(list.textContent).toContain(pokemonMock.name);
    expect(list.textContent).toContain(pokemonMock.id);
    expect(list.textContent).toContain(pokemonMock.types[0]);
  }));
});
