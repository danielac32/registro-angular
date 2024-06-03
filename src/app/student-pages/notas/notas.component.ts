import { Component ,OnInit} from '@angular/core';
import {NavBarComponent} from '../components/nav-bar/nav-bar.component'
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
import {NewForm} from '../formGroup/notas.formGroup'

import {ResponsePerfil,
        ResponseAcademico,
        ResponseRepresent,
        ResponsePerfilRecord,
        ResponsePerfilRepresent,
        ResponseRecordRepresentante,
        ResponseAll} from '../interface/response.interface'
import {IndexCardComponent} from '../dialog/index-card/index-card.component'
import { MatDialog } from '@angular/material/dialog';
import { Router,NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {CardNotesComponent} from '../components/card-notes/card-notes.component'
import {AcademicoDetail,Academico,RecordData,AcademicoDetails} from '../interface/estudiante.interface'

@Component({
  selector: 'app-notas',
  standalone: true,
  providers: [EstudianteService,],
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
      MatMenuModule,
      MatIconModule,
      MatTooltipModule,
      CardNotesComponent
  ],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent implements OnInit {
newForm: FormGroup<NewForm>;
id_record:string='';
id_estudiante:string='';
cardEnable:boolean=false;
records:AcademicoDetail[]=[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private estudianteService:EstudianteService
              ) {
    this.newForm = new FormGroup<NewForm>(new NewForm());
  }
ngOnInit(): void {
    /*this.route.queryParams.subscribe(params => {
      this.id_record=params['id_record'];
      this.id_estudiante=params['id_estudiante'];
      if(this.id_record!==undefined && this.id_estudiante!==undefined){
         console.log(params['id_record'],params['id_estudiante']);
      }
    });*/
  this.cardEnable=false;
}


onSubmit(){
  const {cedula}= this.newForm.value;
  this.newForm.get("cedula")?.setValue('');
  if(cedula){
    //console.log(cedula)
    this.estudianteService.getRecord(cedula?.toString()).subscribe(({response}) => {
       //console.log(response.recordAcademico)
      // console.log(response.recordAcademico)
      this.records=response.recordAcademico;
      this.cardEnable=true;
    }, error => {
      console.error('Error en la solicitud :', error);
    });
  }
}


}
