import { FormGroup, FormControl, Validators } from '@angular/forms';
export class NewForm {
  cedula = new FormControl('', [Validators.required,Validators.min(10)]);
  fechaEscolarDesde = new FormControl('', [Validators.required]);
  fechaEscolarHasta = new FormControl('', [Validators.required]);
  plantelOrigen = new FormControl('');
  repitiente = new FormControl(false);
  curso = new FormControl('', [Validators.required]);
  pruebaVocacional = new FormControl(false);
  materiasAprobadas = new FormControl([],[]);
  materiasAplazadas = new FormControl([],[]);
}


