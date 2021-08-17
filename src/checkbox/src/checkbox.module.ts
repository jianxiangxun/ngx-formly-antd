import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { NgxFormlyAntdFormItemModule } from 'ngx-formly-antd/form-item';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { CheckboxComponent } from './checkbox.component';


@NgModule({
  declarations: [
    CheckboxComponent,
    CheckboxGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NgxFormlyAntdFormItemModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: CheckboxComponent,
          wrappers: ['form-item'],
        },
        {
          name: 'checkbox-group',
          component: CheckboxGroupComponent,
          wrappers: ['form-item'],
        },
      ],
    }),
  ],
})
export class CheckboxModule { }
