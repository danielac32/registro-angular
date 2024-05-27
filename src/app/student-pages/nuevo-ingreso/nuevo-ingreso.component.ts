import { Component ,OnInit} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {EstudianteService} from '../service/estudiante.service'
import {NewForm} from '../formGroup/nuevo-ingreso.formGroup'
import {
  Perfil,
  Representante,
  Academico,
  CrearEstudiante
} from '../interface/estudiante.interface'


@Component({
  selector: 'app-nuevo-ingreso',
  standalone: true,
  providers: [provideNativeDateAdapter(),EstudianteService],
  imports: [
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule, // Import FormsModule
      ReactiveFormsModule, // Import ReactiveFormsModule
      CommonModule,
      MatCardModule,
      MatCheckboxModule,
      MatSelectModule, 
      TextFieldModule,
      MatDatepickerModule,
      MatListModule,
      MatProgressBarModule,
  ],
  templateUrl: './nuevo-ingreso.component.html',
  styleUrl: './nuevo-ingreso.component.css'
})
export class NuevoIngresoComponent implements OnInit {
newForm: FormGroup<NewForm>;
showSecondSection = false;
countFrame = 0;
Materias: string[] = ['Fisica', 'Quimica', 'Matematica','Ingles','Castellano','Historia'];


constructor(private _snackBar: MatSnackBar,private estudianteService:EstudianteService) {
    this.newForm = new FormGroup<NewForm>(new NewForm());
  }


  ngOnInit(): void {

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, // Duración en milisegundos
      verticalPosition: 'top', // Posición vertical de la alerta
      horizontalPosition: 'end', // Posición horizontal de la alerta
      panelClass: ['green']
    });
  }


  onSubmit() {
  if(!this.newForm.valid){
      this.openSnackBar("Error ingresando alumno", 'Cerrar');
      return;
  } 
  const { nombre,correo,cedula,direccion,telefono,medicina,alergia,...rest} = this.newForm.value;
  const { madre,correoM,cedulaM,telefonoM,profesionM,viveM,padre,correoP,cedulaP,telefonoP,profesionP,viveP,numEmergencia,parentesco,nombreRepresentante,...ultimo}=rest;
  const { fechaDesde,fechaHasta,plantelOrigen,repitiente,curso,pruebaVocacional,materiasAprobadas,materiasAplazadas} = ultimo;
    

    const perfil : Perfil={
        name: nombre ?? '',
        email: correo ?? '',
        cedula: cedula?.toString() ?? '',
        //origen: plantelOrigen ?? '',
        direccion: direccion ?? '',
        telefono:telefono ?? '',
        medicina: medicina as boolean,
        alergia: alergia as boolean
    }
    const representante : Representante={
        madre: madre ?? '',
        cedulaM: cedulaM ?? '',
        telefonoM: telefonoM ?? '',
        emailM: correoM ?? '',
        profesionM: profesionM ?? '',
        viveConEstuanteM: viveM as boolean,
        padre: padre ?? '',
        cedulaP: cedulaP ?? '',
        telefonoP: telefonoP ?? '',
        emailP: correoP ?? '',
        profesionP: profesionP ?? '',
        viveConEstuanteP: viveP as boolean,
        numEmergencia: numEmergencia ?? '',
        parentesco: parentesco ?? '',
        nombreRepresentante: nombreRepresentante ?? ''
    }
 
    const academico : Academico={
      fechaEscolarDesde: fechaDesde ?? '',
      fechaEscolarHasta: fechaHasta ?? '',
      plantelOrigen: plantelOrigen ?? '',
      repitiente: repitiente as boolean,
      curso: Number(curso),
      materiasAprobadas: materiasAprobadas ?? [],
      materiasAplazadas: materiasAplazadas ?? [],
      pruebaVocacional: pruebaVocacional as boolean,
      tipoEstudiante: 'Nuevo ingreso'
    }

    const estudiante:CrearEstudiante={
      perfilEstudiante:perfil,
      representante:representante,
      academico:academico
    }
    this.estudianteService.create(estudiante).subscribe(({estudiante}) => {
       console.log(estudiante,"ok")
       this.openSnackBar("Alumno ingresado", 'Cerrar');
    }, error => {
      console.error('Error en la solicitud :', error);
      this.openSnackBar("Error ingresando alumno", 'Cerrar');
    });


  }
}
