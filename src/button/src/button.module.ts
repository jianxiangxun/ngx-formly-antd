import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzButtonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'button',
          component: ButtonComponent,
        },
        {
          name: 'submit',
          extends: 'button',
        },
        {
          name: 'reset',
          extends: 'button',
        },
      ],
    }),
  ],
})
export class ButtonModule { }
