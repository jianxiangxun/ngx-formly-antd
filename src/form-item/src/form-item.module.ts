import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormItemComponent } from './form-item.component';



@NgModule({
  declarations: [
    FormItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-item',
          component: FormItemComponent,
        },
      ],
    }),
  ],
})
export class FormItemModule { }
