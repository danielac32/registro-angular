import { Component ,OnInit} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule



export class LoginForm {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)]);
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule, // Import FormsModule
      ReactiveFormsModule, // Import ReactiveFormsModule
      CommonModule,
      MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit {
  email?: string = '';
  password?: string = '';
  loginForm: FormGroup<LoginForm>;


   constructor() {
    this.loginForm = new FormGroup<LoginForm>(new LoginForm());
  }


  ngOnInit(): void {

  }


  onSubmit() {
    const {email,password}=this.loginForm.value;
    console.log(email,password)

  }
}
