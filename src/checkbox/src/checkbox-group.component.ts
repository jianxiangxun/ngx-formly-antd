import { Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-antd-checkbox-group',
  template: `
    <nz-checkbox-wrapper
      [formlyAttributes]="field"
      style="width: 100%;"
      (nzOnChange)="control.setValue($event)"
    >
      <ng-container *ngFor="let option of to.options | formlySelectOptions: field | async">
        <label
          nz-checkbox
          [nzValue]="option.value"
          [nzDisabled]="option.disabled"
          [ngModel]="control.value?.includes(option.value)"
        >{{ option.label }}</label>
      </ng-container>
    </nz-checkbox-wrapper>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true,
    },
  ],
})
export class CheckboxGroupComponent extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
