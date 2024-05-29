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
import {MatMenuModule} from '@angular/material/menu';
import {EstudianteService} from '../service/estudiante.service'
import {NewForm} from '../formGroup/update.formGroup'
import {Options,Academico,RecordData} from '../interface/estudiante.interface'
import {Utils} from '../../shared/utils/utils'
import {ResponsePerfil,
        ResponseAcademico,
        ResponseRepresent,
        ResponsePerfilRecord,
        ResponsePerfilRepresent,
        ResponseRecordRepresentante,
        ResponseAll} from '../interface/response.interface'


@Component({
  selector: 'app-update',
  standalone: true,
  providers: [provideNativeDateAdapter(),EstudianteService,Utils],
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
      MatMenuModule
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})


export class UpdateComponent implements OnInit {
newForm: FormGroup<NewForm>;
frameSearch:boolean=true;
frameNum:number=0;
globalDataFrame:any;
Materias: string[] = ['Fisica', 'Quimica', 'Matematica','Ingles','Castellano','Historia'];


constructor(private utils:Utils,private _snackBar: MatSnackBar,private estudianteService:EstudianteService) {
    this.newForm = new FormGroup<NewForm>(new NewForm());
}
ngOnInit(): void {
  this.frameSearch=true;
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
	 const {cedula,...recordData}= this.newForm.value;

     //console.log(this.newForm.value);
     if (cedula != null) {
        this.estudianteService.findById(cedula?.toString()).subscribe(({response}) => {
          //console.log(response.perfil.name,"ok")
            const cleanedRecordData: RecordData = {
                fechaEscolarDesde: recordData.fechaEscolarDesde ?? '',
                fechaEscolarHasta: recordData.fechaEscolarHasta ?? '',
                plantelOrigen: recordData.plantelOrigen ?? '',
                repitiente: recordData.repitiente ?? false,
                curso: recordData.curso ?? '',
                pruebaVocacional: recordData.pruebaVocacional ?? false,
                materiasAprobadas: recordData.materiasAprobadas ?? [],
                materiasAplazadas: recordData.materiasAplazadas ?? []
            };
           this.saveRecord(response.id,cleanedRecordData);
        }, error => {
          console.error('Error en la solicitud :', error);
          this.openSnackBar("Error buscando alumno", 'Cerrar');
        });
    }
}

saveRecord(id:number,recordData:RecordData){
     // console.log(id,recordData);
      const newRecord: Academico = {
        fechaEscolarDesde: recordData.fechaEscolarDesde ?? '',
        fechaEscolarHasta: recordData.fechaEscolarHasta ?? '',
        plantelOrigen: recordData.plantelOrigen,
        repitiente: recordData.repitiente,
        materiasAprobadas: recordData.materiasAprobadas,
        materiasAplazadas: recordData.materiasAplazadas,
        pruebaVocacional: recordData.pruebaVocacional,
        tipoEstudiante: 'Actualizacion',
        id_estudiante:id,
        curso: Number(recordData.curso)
    };
    console.log(newRecord)
}

}
