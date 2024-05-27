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
 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {EstudianteService} from '../service/estudiante.service'
import {NewForm} from '../formGroup/nuevo-ingreso.fromGroup'
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
      MatProgressBarModule
  ],
  templateUrl: './nuevo-ingreso.component.html',
  styleUrl: './nuevo-ingreso.component.css'
})
export class NuevoIngresoComponent implements OnInit {
newForm: FormGroup<NewForm>;
showSecondSection = false;
countFrame = 0;
Materias: string[] = ['Fisica', 'Quimica', 'Matematica','Ingles','Castellano','Historia'];


constructor(private estudianteService:EstudianteService) {
    this.newForm = new FormGroup<NewForm>(new NewForm());
  }


ngOnInit(): void {

  }



  onSubmit() {

  const { nombre,correo,cedula,direccion,telefono,medicina,alergia,...rest} = this.newForm.value;
  const { madre,correoM,cedulaM,telefonoM,profesionM,viveM,padre,correoP,cedulaP,telefonoP,profesionP,viveP,numEmergencia,parentesco,nombreRepresentante,...ultimo}=rest;
  const { fechaDesde,fechaHasta,plantelOrigen,repitiente,curso,pruebaVocacional,materiasAprobadas,materiasAplazadas} = ultimo;
    

    const perfil : Perfil={
        name: nombre ?? 'Not provided',
        email: correo ?? 'Not provided',
        cedula: cedula ?? 'Not provided',
        //origen: plantelOrigen ?? 'Not provided',
        direccion: direccion ?? 'Not provided',
        telefono:telefono ?? 'Not provided',
        medicina: medicina as boolean,
        alergia: alergia as boolean
    }
    const representante : Representante={
        madre: madre ?? 'Not provided',
        cedulaM: cedulaM ?? 'Not provided',
        telefonoM: telefonoM ?? 'Not provided',
        emailM: correoM ?? 'Not provided',
        profesionM: profesionM ?? 'Not provided',
        viveConEstuanteM: viveM as boolean,
        padre: padre ?? 'Not provided',
        cedulaP: cedulaP ?? 'Not provided',
        telefonoP: telefonoP ?? 'Not provided',
        emailP: correoP ?? 'Not provided',
        profesionP: profesionP ?? 'Not provided',
        viveConEstuanteP: viveP as boolean,
        numEmergencia: numEmergencia ?? 'Not provided',
        parentesco: parentesco ?? 'Not provided',
        nombreRepresentante: nombreRepresentante ?? 'Not provided'
    }
 

    const academico : Academico={

      fechaEscolarDesde: fechaDesde ?? 'Not provided',
      fechaEscolarHasta: fechaHasta ?? 'Not provided',
      plantelOrigen: plantelOrigen ?? 'Not provided',
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
      
    console.log(materiasAprobadas);
    console.log(materiasAplazadas);


    this.estudianteService.create(academico).subscribe(response => {
       console.log("ok")
    }, error => {
      console.error('Error en la solicitud :', error);
      
    });


  }
}
