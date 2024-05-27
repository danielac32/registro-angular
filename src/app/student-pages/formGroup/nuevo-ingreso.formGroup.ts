import { FormGroup, FormControl, Validators } from '@angular/forms';

export class NewForm {
  nombre = new FormControl('', [Validators.required]);
  correo= new FormControl('', [ Validators.email]);
  cedula = new FormControl('', [Validators.required,Validators.min(10)]);
  //plantelOrigen = new FormControl('', [Validators.required]);
  direccion = new FormControl('', [Validators.required]);
  telefono = new FormControl(''/*, [Validators.minLength(12)]*/);
  medicina = new FormControl(false,[Validators.required]);
  alergia = new FormControl(false,[Validators.required]);
  //

  madre = new FormControl('');
  correoM= new FormControl('', [Validators.email]);
  cedulaM = new FormControl('');
  telefonoM = new FormControl(''/*, [Validators.minLength(12)]*/);
  profesionM = new FormControl('');
  viveM = new FormControl(false);

  padre = new FormControl('');
  correoP= new FormControl('', [ Validators.email]);
  cedulaP = new FormControl('');
  telefonoP = new FormControl(''/*, [Validators.minLength(12)]*/);
  profesionP = new FormControl('');
  viveP = new FormControl(false);
  numEmergencia = new FormControl(''/*, [Validators.minLength(12)]*/);
  parentesco = new FormControl('');
  nombreRepresentante = new FormControl('', [Validators.required]);

  fechaDesde = new FormControl('', [Validators.required]);
  fechaHasta = new FormControl('', [Validators.required]);
  plantelOrigen = new FormControl('');
  repitiente = new FormControl(false);
  curso = new FormControl('', [Validators.required]);
  pruebaVocacional = new FormControl(false);
  materiasAprobadas = new FormControl([],[]);
  materiasAplazadas = new FormControl([],[]);

  //tipoEstudiante = new FormControl('', [Validators.required]);
  //observacion = new FormControl('', [Validators.required]);

 /* nombre= new FormControl('', [Validators.required]);
  apellido= new FormControl('', [Validators.required]);
  correoElectronico= new FormControl('', [Validators.required, Validators.email]);
  carrera= new FormControl('', [Validators.required]);
  universidad= new FormControl('', [Validators.required]);
  alergia = new FormControl(false,[Validators.required]);*/
}