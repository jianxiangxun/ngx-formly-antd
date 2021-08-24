import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-antd-date-range',
  template: `
    <nz-range-picker
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
      [nzRanges]="to.ranges"
      [nzSeparator]="to.separator"
    ></nz-range-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeComponent  extends FieldType  {
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
