import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LayoutComponent } from './layout.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ThemePickerComponent } from './widgets/theme-picker.component';
import { SiderMenuComponent } from './widgets/sider-menu.component';

export * from './layout';

@NgModule({
  declarations: [
    LayoutComponent,
    ThemePickerComponent,
    SiderMenuComponent,
  ],
  imports: [
    CommonModule,
    NzDropDownModule,
    NzMenuModule,
    NzMessageModule,
    NzIconModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule { }
