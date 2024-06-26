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

import {EstudianteService} from '../../service/estudiante.service'
import {Academico,AcademicoDetails} from '../../interface/estudiante.interface'
import {MessageService} from '../../service/subjectService'
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-card',
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

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
 viewNotes:boolean=false;
 
 @Input() public record?: AcademicoDetails;
 


 constructor(private router: Router,
            private estudianteService:EstudianteService,
            private messageService: MessageService) {
}


 ngOnInit(): void {
    if(this.record){
       console.log(this.record);
    }
 }


 /*notes(id_record:number,id_estudiante:number){
      this.messageService.sendMessage({
           receiver:"index-card",
           data:[id_record,id_estudiante]
      });
 }*/
 delete(id_record:number,id_estudiante:number){
    this.estudianteService.deleteRecord(id_record,id_estudiante).subscribe(({recordDtelete}) => {
       console.log(recordDtelete)
       this.messageService.sendMessage({
              receiver:"index-card",
              status:"Record eliminado"
       });
    }, error => {
      console.error('Error en la solicitud :', error);

    });
 }

}
