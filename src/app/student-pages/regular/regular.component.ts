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
import {NewForm} from '../formGroup/regular.formGroup'


@Component({
  selector: 'app-regular',
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
      MatMenuModule
  ],
  templateUrl: './regular.component.html',
  styleUrl: './regular.component.css'
})
export class RegularComponent implements OnInit {
newForm: FormGroup<NewForm>;


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
    // console.log(this.newForm.value);
    if(!this.newForm.valid){
      this.openSnackBar("Error ingresando alumno", 'Cerrar');
      return;
    } 
    
    let option: string[] = ['0', '0', '0'];
    const {cedula,perfil,record,representante}= this.newForm.value;



    if (perfil && !record && !representante) {
      // Solo incluye el perfil
       option[0]='1';
       option[1]='0';
       option[2]='0';
    } else if (!perfil && record && !representante) {
      // Solo incluye el record
       option[0]='0';
       option[1]='1';
       option[2]='0';
    } else if (!perfil && !record && representante) {
      // Solo incluye el representante
       option[0]='0';
       option[1]='0';
       option[2]='1';
    } else if (perfil && record && !representante) {
      // Incluye el perfil y el record
       option[0]='1';
       option[1]='1';
       option[2]='0';
    } else if (perfil && !record && representante) {
      // Incluye el perfil y el representante
       option[0]='1';
       option[1]='0';
       option[2]='1';
    } else if (!perfil && record && representante) {
      // Incluye el record y el representante
       option[0]='0';
       option[1]='1';
       option[2]='1';
    } else if (perfil && record && representante) {
      // Incluye el perfil, el record y el representante
       option[0]='1';
       option[1]='1';
       option[2]='1';
    } else {
      // Ninguna opción seleccionada
       option[0]='0';
       option[1]='0';
       option[2]='0';
    }
    //console.log(typeof perfil)
    if (cedula != null) {
      this.estudianteService.findOne(cedula?.toString(),option[0],option[1],option[2]).subscribe(response => {
         console.log(response,"ok")
         //this.openSnackBar("Alumno ingresado", 'Cerrar');
      }, error => {
        console.error('Error en la solicitud :', error);
        this.openSnackBar("Error buscando alumno", 'Cerrar');
      });
    }

}



}
