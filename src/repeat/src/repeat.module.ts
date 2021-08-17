import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RepeatActionComponent } from './repeat-action.component';
import { RepeatComponent } from './repeat.component';

@NgModule({
  declarations: [
    RepeatComponent,
    RepeatActionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: RepeatComponent,
        },
        {
          name: 'repeat-action',
          component: RepeatActionComponent,
        },
      ],
    }),
  ],
})
export class RepeatModule { }
