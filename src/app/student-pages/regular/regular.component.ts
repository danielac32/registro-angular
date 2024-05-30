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
import {Options} from '../interface/estudiante.interface'
import {Utils} from '../../shared/utils/utils'
import {ResponsePerfil,
        ResponseAcademico,
        ResponseRepresent,
        ResponsePerfilRecord,
        ResponsePerfilRepresent,
        ResponseRecordRepresentante,
        ResponseAll} from '../interface/response.interface'
import {IndexCardComponent} from '../dialog/index-card/index-card.component'
import { MatDialog } from '@angular/material/dialog';


//import {CardComponent} from '../components/card/card.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-regular',
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
      MatMenuModule,
      //CardComponent
  ],
  templateUrl: './regular.component.html',
  styleUrl: './regular.component.css'
})
export class RegularComponent implements OnInit {
newForm: FormGroup<NewForm>;
frameSearch:boolean=true;
frameNum:number=0;
globalDataFrame:any;

constructor(private router: Router,
            public dialog: MatDialog,
            private utils:Utils,
            private _snackBar: MatSnackBar,
            private estudianteService:EstudianteService) {
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
    // console.log(this.newForm.value);
    if(!this.newForm.valid){
      this.openSnackBar("Error ingresando alumno", 'Cerrar');
      return;
    } 
    let option: string[] = ['0', '0', '0'];
    const {cedula,perfil,record,representante}= this.newForm.value;
    option = this.utils.setMode(perfil??false,record??false,representante??false);
    //console.log(typeof perfil)
    if (cedula != null) {
        this.estudianteService.findOne(cedula?.toString(),option[0],option[1],option[2]).subscribe((response) => {
           console.log(response.mode,"ok")
           this.frameSearch=false;
           this.viewFrame(response,this.utils.getMode(response.mode));
           //this.openSnackBar("Alumno ingresado", 'Cerrar');
        }, error => {
          console.error('Error en la solicitud :', error);
          this.openSnackBar("Error buscando alumno", 'Cerrar');
        });
    }
}

viewFrame(data:any,n:number){
    //console.log("number: ",n)
     //console.log("numero: ",n,data);
     this.frameNum=n;

     if(n==1){
        const res:ResponsePerfil=data;
        this.globalDataFrame=res;
        console.log(res.response.perfil)
     }else if(n==2){
        const res:ResponseAcademico=data;
        this.globalDataFrame=res;
        console.log(res.response.recordAcademico)
        //this.router.navigate(['/estudiante/index-card']);
        const dialogRef = this.dialog.open(IndexCardComponent, {
            width: '54%',
            height:'50%',
            data: {
              record:this.globalDataFrame.response.recordAcademico
            }
        });

        
     }else if(n==3){
        const res:ResponseRepresent=data;
        this.globalDataFrame=res;
        console.log(res.response.representante)
     }else if(n==4){
        const res:ResponsePerfilRecord=data;
        console.log(res.response.perfil,res.response.recordAcademico)
     }else if(n==5){
        const res:ResponsePerfilRepresent=data;
        console.log(res.response.perfil,res.response.representante)
     }else if(n==6){
       const res:ResponseRecordRepresentante=data;
        console.log(res.response.recordAcademico,res.response.representante)
     }else if(n==7){
       const res:ResponseAll=data;
        console.log(res.response)
     }else if(n==8){
        const res:ResponsePerfil=data;
        console.log(res.response.perfil)
     }
}

volver(){
  this.frameSearch=true;
  this.frameNum=0;
}


check(){
  if(this.newForm.get("perfil")?.value){
      this.newForm.get("record")?.setValue(false);
      this.newForm.get("representante")?.setValue(false);
  }else if(this.newForm.get("record")?.value){
      this.newForm.get("perfil")?.setValue(false);
      this.newForm.get("representante")?.setValue(false);
  }else if(this.newForm.get("representante")?.value){
      this.newForm.get("perfil")?.setValue(false);
      this.newForm.get("record")?.setValue(false);
  }
}

}


    /*if (perfil && !record && !representante) {
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
    }*/