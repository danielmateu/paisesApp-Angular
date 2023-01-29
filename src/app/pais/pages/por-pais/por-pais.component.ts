import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  // styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService){}

  buscar(termino: string){
    // console.log(this.termino)
    this.hayError = false
    this.termino = termino

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          console.log(paises)
          this.paises = paises

        },
        error: (err) => {
          console.log(err)
          this.hayError = true
          this.paises = []
        }
      })
  }
}
