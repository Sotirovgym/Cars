import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFieldComponent } from './components/error-field/error-field.component';
import { ValidationPipe } from './pipes/validation.pipe';



@NgModule({
  declarations: [
    ErrorFieldComponent,
    ValidationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorFieldComponent
  ]
})
export class SharedModule { }
