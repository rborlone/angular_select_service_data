import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasoService {

  comboData: number;

  comboDataChange: Subject<number> = new Subject<number>();

  constructor() { 
      this.comboDataChange.subscribe((value) => {
        this.comboData = value
      });
    }
     
    cambiarCombo(value) {
        this.comboDataChange.next(value);
    }
}
