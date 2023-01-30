import { Component } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  // styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = ''
  hayError: boolean = false;
  capital: Capital[] = []

  constructor(private capitalService: PaisService){}

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino

    this.capitalService.buscarCapital(termino)
    .subscribe({
      next: (capital) => {
        console.log(capital)
        this.capital = capital
      },
      error: (error) => {
        console.log(error)
        this.hayError = true
        this.capital = []
      }
    })


  }

  // sugerencias(termino: string){
  //   this.hayError = false;
  // }
}
