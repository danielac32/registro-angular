import { FormGroup, FormControl, Validators } from '@angular/forms';
export class NewForm {
cedula = new FormControl('', [Validators.min(10)]);
}

