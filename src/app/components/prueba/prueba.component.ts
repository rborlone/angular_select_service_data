import { Component, OnInit } from '@angular/core';
import { PasoService } from 'src/app/services/paso.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  title:number;

  constructor(private pasoService:PasoService) { 
    this.pasoService.comboDataChange.subscribe(value => {
      console.log("Alfinal llegue aqui con este valor", value);
      this.title = value;
      this.prueba(value);
    });
  }

  prueba(valor){
    alert("mensaje " + valor);

  }

  ngOnInit(): void {
  }

}
