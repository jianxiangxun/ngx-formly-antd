import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ComponentsComponent } from './components.component';
import { keys } from './ctx';
import { DemoComponent } from './demo/demo.component';
import { HighlightModule } from 'doc/app/components/highlight/highlight.module';

const routes: Routes = keys.map((item) => {
  return {
    path: item.mo,
    component: ComponentsComponent,
  };
});

@NgModule({
  declarations: [ComponentsComponent, DemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzGridModule,
    NzIconModule,
    NzTypographyModule,
    HighlightModule,
    FlexLayoutModule,
    FormlyModule.forChild(),
    RouterModule.forChild(routes),
  ],
})
export class ComponentsModule {}
