import { Component } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisSevice: PaisService) {}

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;
    
    this.paisSevice.buscarCapital(termino)
      .subscribe((paises) => {
        this.paises = paises;
        console.log(paises);
      }, (err) => {
        this.hayError = true;
        this.paises = []; 
      });
  };

}
