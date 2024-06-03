import { Component, Input ,OnInit} from '@angular/core';
import { RouterLink,NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
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
import { MatDialog } from '@angular/material/dialog';


import {EstudianteService} from '../../service/estudiante.service'
import {AcademicoDetail,Academico,AcademicoDetails} from '../../interface/estudiante.interface'
import {MessageService} from '../../service/subjectService'
import { Subscription } from 'rxjs';
import {AsignaturaComponent} from '../../dialog/asignatura/asignatura.component'
import {NotesComponent} from '../../dialog/notes/notes.component'

@Component({
  selector: 'app-card-notes',
  standalone: true,
  providers: [EstudianteService],
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
      AsignaturaComponent,
      NotesComponent
  ],
  templateUrl: './card-notes.component.html',
  styleUrl: './card-notes.component.css'
})
export class CardNotesComponent implements OnInit {
 viewNotes:boolean=false;
 
 @Input() public record?: AcademicoDetail;
 


 constructor(private router: Router,
            public dialog: MatDialog,
            private estudianteService:EstudianteService,
            private messageService: MessageService) {
}


 ngOnInit(): void {
    if(this.record){
       //console.log(this.record);
    }
 }


materias(id:number,curso:number){
        const dialogRef = this.dialog.open(AsignaturaComponent, {
            width: '300px',
            height:'200px',
            data: {
                id,
                curso
            }
        });
        dialogRef.afterClosed().subscribe(response => {
            if(response!==undefined){
                 
            }else{
              console.log("error: salio del formulario")
            }
        }, error => {
              
        });
}
notas(id:number,curso:number){
      const dialogRef = this.dialog.open(NotesComponent, {
            width: '70%',
            height:'70%',
            data: {
                id,
                curso,
                read:false
            }
        });
        dialogRef.afterClosed().subscribe(response => {
            if(response!==undefined){
                 
            }else{
              console.log("error: salio del formulario")
            }
        }, error => {
              
        });
}
ver(id:number,curso:number){
  const dialogRef = this.dialog.open(NotesComponent, {
            width: '70%',
            height:'70%',
            data: {
                id,
                curso,
                read:true
            }
        });
        dialogRef.afterClosed().subscribe(response => {
            if(response!==undefined){
                 
            }else{
              console.log("error: salio del formulario")
            }
        }, error => {
              
        });
}


}
