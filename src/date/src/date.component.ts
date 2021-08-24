import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-antd-date',
  template: `
    <nz-date-picker
      [nzId]="id"
      [formControl]="control"
      [formlyAttributes]="field"
      [nzAllowClear]="to.allowClear"
      [nzDisabledDate]="to.disabledDate"
      [nzMode]="to.mode"
      [nzPlaceHolder]="to.placeholder!"
      [nzSize]="to.size"
      [nzBorderless]="to.borderless"
      [nzInline]="to.inline"
      [nzShowTime]="to.showTime"
      [nzDisabledTime]="to.disabledTime"
      [nzInputReadOnly]="to.inputReadOnly"
      [nzFormat]="to.format"
      [nzShowToday]="to.showToday"
      [nzShowNow]="to.showNow"
    ></nz-date-picker>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
