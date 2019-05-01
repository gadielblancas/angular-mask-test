import {Component, Directive, HostListener} from '@angular/core';
import { FormGroup, FormControl, NgControl } from "@angular/forms"

@Directive({
  selector: '[removeDash]'
})
export class NumericDirective {

  constructor(private model: NgControl) { }

  @HostListener('input') inputChange() {
    const newValue = this.model.value.replace(/[ !@#$%^&*(),.?":{}|_<>-]/g, "");
    this.model.control.setValue(newValue);
    this.model.valueAccessor.writeValue(newValue);
  }    
}