import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-antd-input',
  template: `
    <ng-container [ngSwitch]="to.type">
      <ng-container *ngSwitchCase="'textarea'">
        <textarea
          nz-input
          [formControl]="control"
          [formlyAttributes]="field"
          [nzSize]="to.size"
          [nzBorderless]="to.borderless"
          [nzAutosize]="to.autosize"
        ></textarea>
      </ng-container>

      <ng-container *ngSwitchCase="'number'">
        <nz-input-group
          [nzSize]="to.size"
          [nzAddOnBefore]="to.addOnBeforeText"
          [nzAddOnBeforeIcon]="to.addOnBeforeIcon"
          [nzAddOnAfter]="to.addOnAfterText"
          [nzAddOnAfterIcon]="to.addOnAfterIcon"
        >
          <nz-input-number
            [nzId]="id"
            [formControl]="control"
            [formlyAttributes]="field"
            [nzPlaceHolder]="to.placeholder!"
            [nzMax]="to.max!"
            [nzMin]="to.min!"
            [nzPrecision]="to.precision"
            [nzPrecisionMode]="to.precisionMode"
            [nzStep]="to.step!"
            [nzSize]="to.size"
            style="width: 100%;"
          ></nz-input-number>
        </nz-input-group>
      </ng-container>

      <ng-container *ngSwitchDefault>
        <nz-input-group
          [nzAddOnBefore]="to.addOnBeforeText"
          [nzAddOnBeforeIcon]="to.addOnBeforeIcon"
          [nzAddOnAfter]="to.addOnAfterText"
          [nzAddOnAfterIcon]="to.addOnAfterIcon"
          [nzPrefix]="to.prefixText"
          [nzPrefixIcon]="to.prefixIcon"
          [nzSuffix]="to.suffixText"
          [nzSuffixIcon]="to.suffixIcon"
        >
          <input
            nz-input
            [formControl]="control"
            [type]="to.type || 'text'"
            [formlyAttributes]="field"
            [nzSize]="to.size"
            [nzBorderless]="to.borderless"
          />
        </nz-input-group>
      </ng-container>
    </ng-container>
  `,
  styles: [
  ],
})
export class InputComponent extends FieldType {
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
