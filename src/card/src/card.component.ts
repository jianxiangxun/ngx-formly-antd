import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-antd-card',
  template: `
    <nz-card [nzTitle]="to.title" style="margin-bottom: 24px" [nzType]="to.type === 'inner' ? 'inner' : null" [nzSize]="to.size" [nzBorderless]="to.borderless" [nzBodyStyle]="to.bodyStyle">
      <ng-container #fieldComponent></ng-container>
    </nz-card>
  `,
  styles: [
  ],
})
export class CardComponent extends FieldWrapper {}
