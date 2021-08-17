import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    NzCardModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'card',
          component: CardComponent,
        },
      ],
    }),
  ],
})
export class CardModule { }
