import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule,
    NzGridModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'grid',
          component: GridComponent,
          defaultOptions: {
            templateOptions: {
              justify: 'start',
              align: 'top',
              gutter: [16, 16],
            },
          },
        },
      ],
    }),
  ],
})
export class GridModule { }
