import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-antd-select',
  template: `
    <nz-select
      [class.ng-dirty]="showError"
      [nzPlaceHolder]="to.placeholder!"
      [formControl]="control"
      [formlyAttributes]="field"
      [nzMode]="to.multiple ? 'multiple' : 'default'"
      [nzAllowClear]="to.allowClear"
    >
      <ng-container *ngFor="let option of to.options | formlySelectOptions: field | async">
        <nz-option-group *ngIf="option.group" [nzLabel]="option.label">
          <nz-option
            *ngFor="let child of option.group"
            [nzValue]="child.value"
            [nzDisabled]="child.disabled"
            [nzLabel]="child.label"
          >
          </nz-option>
        </nz-option-group>
        <nz-option
          *ngIf="!option.group"
          [nzValue]="option.value"
          [nzDisabled]="option.disabled"
          [nzLabel]="option.label"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
