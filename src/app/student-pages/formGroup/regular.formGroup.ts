import { FormGroup, FormControl, Validators } from '@angular/forms';
export class NewForm {
cedula = new FormControl('', [Validators.required,Validators.min(10)]);
perfil = new FormControl(false);
record = new FormControl(false);
representante = new FormControl(false);
}


