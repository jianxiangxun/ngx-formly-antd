import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DateRangeComponent } from './date-range.component';
import { DateComponent } from './date.component';


@NgModule({
  declarations: [
    DateComponent,
    DateRangeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date',
          component: DateComponent,
          wrappers: ['form-item'],
          defaultOptions: {
            templateOptions: {
              allowClear: true,
              mode: 'date',
              showToday: false,
              showNow: false,
              inputReadOnly: true,
            },
          },
        },
        {
          name: 'date-time',
          extends: 'date',
          defaultOptions: {
            templateOptions: {
              showTime: true,
            },
          },
        },
        {
          name: 'date-range',
          component: DateRangeComponent,
          wrappers: ['form-item'],
          defaultOptions: {
            templateOptions: {
              allowClear: true,
              mode: 'date',
              inputReadOnly: true,
            },
          },
        },
      ],
    }),
  ],
})
export class DateModule { }
