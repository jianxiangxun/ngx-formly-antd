import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-antd-checkbox',
  template: `
    <label
      nz-checkbox
      [formControl]="control"
      [formlyAttributes]="field"
      [nzIndeterminate]="to.indeterminate && indeterminate"

    >{{to.label}}</label>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends FieldType {
  get indeterminate(): boolean {
    return this.formControl.value === null || this.formControl.value === undefined;
  }
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
