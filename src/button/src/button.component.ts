import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

type NzLegacyButtonType = 'primary' | 'dashed' | 'link' | 'text';

@Component({
  selector: 'formly-field-antd-button',
  template: `
    <button
      [attr.type]="field.type"
      nz-button
      [nzType]="nzType"
      [nzShape]="to.shape"
      [nzSize]="to.size"
      [nzGhost]="to.ghost"
      [nzBlock]="to.block"
      [nzDanger]="to.danger"
      [formlyAttributes]="field"
    >
      <i *ngIf="to.icon" nz-icon [nzType]="to.icon"></i>
      <span *ngIf="to.text">{{ to.text }}</span>
    </button>
  `,
  styles: [],
})
export class ButtonComponent extends FieldType {
  get nzType(): NzLegacyButtonType {
    const type: NzLegacyButtonType = [
      'primary',
      'dashed',
      'link',
      'text',
    ].includes(this.to.type as string)
      ? (this.to.type as NzLegacyButtonType)
      : 'primary';
    return type;
  }
}
