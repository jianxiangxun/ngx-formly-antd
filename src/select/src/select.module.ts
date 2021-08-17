import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { NzSelectModule } from 'ng-zorro-antd/select';

import { NgxFormlyAntdFormItemModule } from 'ngx-formly-antd/form-item';
import { SelectComponent } from './select.component';



@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NgxFormlyAntdFormItemModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: SelectComponent,
          wrappers: ['form-item'],
        },
        { name: 'enum', extends: 'select' },
      ],
    }),
  ],
})
export class SelectModule { }
