import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.css'],
  host: { style: 'color: red;' },
})
export class ErrorFieldComponent {
  @Input() control!: FormControl | AbstractControl;
  @Input() errorMessages!: Object;

  constructor(public formDirective: FormGroupDirective) {}
}
