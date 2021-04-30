import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { PokemonComponent } from './pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
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

  afterEach(() => {
    fixture.destroy();
  });

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ PokemonComponent ],
      imports: [
        TranslateTestingModule.withTranslations({ pt: require('src/assets/i18n/pt.json'), en: require('src/assets/i18n/en.json') }),
        HttpClientTestingModule ,
        LazyLoadImageModule
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

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    fixture.componentInstance.pokemon = pokemonMock;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img', inject([TranslateService], (translateService: TranslateService) => {
    const compiled = fixture.debugElement.nativeElement;
    const img = compiled.querySelector('#img-pokemon');
    expect(img).toBeTruthy();
  }));

  it('should render name', inject([TranslateService], (translateService: TranslateService) => {
    const compiled = fixture.debugElement.nativeElement;
    const name = compiled.querySelector('#txt-name-pokemon');
    expect(name.textContent).toEqual(pokemonMock.name);
  }));

  it('should render description', inject([TranslateService], (translateService: TranslateService) => {
    const compiled = fixture.debugElement.nativeElement;
    const description = compiled.querySelector('#txt-description-pokemon');
    expect(description.textContent).toEqual('Descrição');
  }));

  it('should render resistance', inject([TranslateService], (translateService: TranslateService) => {
    const compiled = fixture.debugElement.nativeElement;
    const resistance = compiled.querySelector('#txt-resistance-pokemon');
    expect(resistance.textContent).toEqual('Resistência');
  }));

  it('should render weakness', inject([TranslateService], (translateService: TranslateService) => {
    const compiled = fixture.debugElement.nativeElement;
    const weakness = compiled.querySelector('#txt-weakness-pokemon');
    expect(weakness.textContent).toEqual('Fraqueza(s)');
  }));

  it('should render attack', inject([TranslateService], (translateService: TranslateService) => {
    const compiled = fixture.debugElement.nativeElement;
    const attack = compiled.querySelector('#txt-attack-pokemon');
    expect(attack.textContent).toEqual('Ataque(s)');
  }));
});
