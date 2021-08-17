import { Component, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ThemeService, ThemeType } from 'doc/app/services/theme.service';
import { SiderMenu } from './layout';

@Component({
  selector: 'doc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent {

  @Input() menus: SiderMenu[] = [];

  constructor(
    private themeService: ThemeService,
    private nzMessageService: NzMessageService,
  ) { }

  changeTheme(theme: ThemeType): void {
    const refer = this.nzMessageService.loading('正在切换主题', { nzDuration: 0 });
    this.themeService.set(theme).subscribe(() => {
      this.nzMessageService.remove(refer.messageId);
    }, () => {
      this.nzMessageService.remove(refer.messageId);
      this.nzMessageService.error('主题切换失败');
    });
  }

}
