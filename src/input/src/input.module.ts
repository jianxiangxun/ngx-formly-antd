import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { NgxFormlyAntdFormItemModule } from 'ngx-formly-antd/form-item';
import { InputComponent } from './input.component';


@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NgxFormlyAntdFormItemModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: InputComponent,
          wrappers: ['form-item'],
        },
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
              step: 1,
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
              precision: 0,
              step: 1,
            },
          },
        },
        {
          name: 'textarea',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'textarea',
              autosize: { minRows: 2, maxRows: 6 },
            },
          },
        },
      ],
    }),
  ],
})
export class InputModule { }
