import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-antd-form-item',
  template: `
    <nz-form-item>
      <ng-container *ngIf="to.label && to.hideLabel !== true">
        <nz-form-label [nzRequired]="to.required && to.hideRequiredMarker !== true" [nzFor]="id" [nzFlex]="formState?.labelWidth || '100px'">
          {{ to.label }}
        </nz-form-label>
      </ng-container>
      <ng-container *ngIf="to.invisibleLabel">
        <nz-form-label [nzFor]="id" [nzFlex]="formState?.labelWidth || '100px'" [nzNoColon]="true"></nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
})
export class FormItemComponent extends FieldWrapper {
  get errorState(): 'error'|'' {
    return this.showError && this.field.validation?.show !== false ? 'error'  : '';
  }

}
