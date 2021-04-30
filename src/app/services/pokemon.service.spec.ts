import { TestBed, inject } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

describe('PokemonService', () => {
  let service: PokemonService;
  const pokemonMock = {
    id: "TEST_ID",
    name: "TEST_NAME",
    types: ["TEST_TYPES"],
    images: {
      large: "",
      small: "src/assets/img/card-test.png"
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  })
  

  it('should get pokemon',inject([HttpTestingController, PokemonService],(httpMock: HttpTestingController, pokemonService: PokemonService) => {
    pokemonService.getPokemon(pokemonMock.id).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Response:
          expect(event.body).toEqual(pokemonMock);
      }
    });
    const mockReq = httpMock.expectOne(`${environment.API_PATH}cards/${pokemonMock.id}`);
    expect(mockReq.request.responseType).toEqual('json');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(pokemonMock);

    httpMock.verify();
  }));

    it('should get pokemonList',inject([HttpTestingController, PokemonService],(httpMock: HttpTestingController, pokemonService: PokemonService) => {
    pokemonService.getListPokemon().subscribe((event: HttpEvent<Pokemon[]>) => {
      switch (event.type) {
        case HttpEventType.Response:
          expect(event.body).toEqual([pokemonMock]);
      }
    });
    const mockReq = httpMock.expectOne(`${environment.API_PATH}cards?orderBy=name`);
    expect(mockReq.request.responseType).toEqual('json');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(pokemonMock);

    httpMock.verify();
  }));
});
