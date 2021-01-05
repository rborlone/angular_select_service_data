import { Component } from '@angular/core';
import { PasoService } from './services/paso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comboDemo';
  
  anios = [
    { id: 2020, name: "2020" },
    { id: 2021, name: "2021" },
    { id: 2022, name: "2022" }
  ];
  
  constructor(private pasoService:PasoService) {}

  onChange(value){
    this.pasoService.cambiarCombo(value);
  }

}



