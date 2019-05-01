import {Component, Directive, HostListener} from '@angular/core';
import { FormGroup, FormControl, NgControl } from "@angular/forms"

/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html'
})
export class DatepickerOverviewExample {
  myModel: any;
  datemask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  phoneMask = ['(',/\d/, /\d/, /\d/,')',' ', /\d/ , /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  form = new FormGroup({
    ssn: new FormControl(null, []),
    phone: new FormControl(null, [])
  });

  print(){
    console.log(this.form.value);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */