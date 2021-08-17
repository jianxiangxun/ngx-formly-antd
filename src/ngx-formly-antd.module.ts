import { NgModule } from '@angular/core';

import { NgxFormlyAntdCardModule } from 'ngx-formly-antd/card';
import { NgxFormlyAntdFormItemModule } from 'ngx-formly-antd/form-item';
import { NgxFormlyAntdGridModule } from 'ngx-formly-antd/grid';
import { NgxFormlyAntdRepeatModule } from 'ngx-formly-antd/repeat';


import { NgxFormlyAntdCheckboxModule } from 'ngx-formly-antd/checkbox';
import { NgxFormlyAntdDateModule } from 'ngx-formly-antd/date';
import { NgxFormlyAntdInputModule } from 'ngx-formly-antd/input';
import { NgxFormlyAntdRadioModule } from 'ngx-formly-antd/radio';
import { NgxFormlyAntdSelectModule } from 'ngx-formly-antd/select';


@NgModule({
  imports: [
    NgxFormlyAntdFormItemModule,
    NgxFormlyAntdCardModule,
    NgxFormlyAntdGridModule,
    NgxFormlyAntdRepeatModule,

    NgxFormlyAntdInputModule,
    NgxFormlyAntdSelectModule,
    NgxFormlyAntdRadioModule,
    NgxFormlyAntdCheckboxModule,
    NgxFormlyAntdDateModule,
  ],
})
export class NgxFormlyAntdModule {}
