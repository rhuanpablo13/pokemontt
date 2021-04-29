import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attacks, Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon;
  title = 'appBootstrap';
  attack: Attacks;
  
  closeResult: string;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.queryParams.id;
    this.pokemonService.getPokemon(id).subscribe((response: any)=> {
      this.pokemon = response.data;
    })
  }

  open(content, attack) {
    this.attack = attack;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
