import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-antd-radio',
  template: `
    <nz-radio-group
      [formControl]="control"
      [formlyAttributes]="field"
      [nzName]="to.name"
      [nzSize]="to.size"
      [nzButtonStyle]="to.buttonStyle"
    >
      <ng-container *ngFor="let option of to.options | formlySelectOptions: field | async">
        <label
          *ngIf="to.buttonStyle"
          nz-radio-button
          [nzValue]="option.value"
          [nzDisabled]="option.disabled"
        >{{option.label}}</label>
        <label
          *ngIf="!to.buttonStyle"
          nz-radio
          [nzValue]="option.value"
          [nzDisabled]="option.disabled"
        >{{option.label}}</label>
      </ng-container>
    </nz-radio-group>
  `,
  styles: [
  ],
})
export class RadioComponent extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
