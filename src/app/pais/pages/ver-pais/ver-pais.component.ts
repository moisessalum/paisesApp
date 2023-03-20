import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent {

  pais!: Country;

  constructor(

    private activatedRoute: ActivatedRoute,
    private paisService: PaisService

    ) {};

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({cca2}) => this.paisService.getPaisPorAlpha(cca2)),
        tap(console.log)
      )
      .subscribe(pais => {
        console.log(pais)
      });
    
  }

}
