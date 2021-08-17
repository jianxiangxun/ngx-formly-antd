import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NgxFormlyAntdFormItemModule } from 'ngx-formly-antd/form-item';
import { RadioComponent } from './radio.component';


@NgModule({
  declarations: [
    RadioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRadioModule,
    NgxFormlyAntdFormItemModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: RadioComponent,
          wrappers: ['form-item'],
        },
        {
          name: 'radio-button',
          extends: 'radio',
          defaultOptions: {
            templateOptions: {
              buttonStyle: 'solid',
            },
          },
        },
      ],
    }),
  ],
})
export class RadioModule { }
