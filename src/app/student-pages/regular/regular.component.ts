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

import {MatMenuModule} from '@angular/material/menu';
 



export class NewForm {
cedula = new FormControl('', [Validators.required,Validators.minLength(10)]);
perfil = new FormControl(false);
record = new FormControl(false);
representante = new FormControl(false);
}

@Component({
  selector: 'app-regular',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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


constructor() {
    this.newForm = new FormGroup<NewForm>(new NewForm());
  }


ngOnInit(): void {

  }

onSubmit() {
     console.log(this.newForm.value)
  }



}
