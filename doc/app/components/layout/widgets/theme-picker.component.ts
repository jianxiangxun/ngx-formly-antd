import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ThemeService, ThemeType } from 'doc/app/services/theme.service';
import { timer } from 'rxjs';

@Component({
  selector: 'doc-theme-picker',
  template: `
    <span
      nz-dropdown
      nzTrigger="click"
      [nzDropdownMenu]="menu"
    >
      <i nz-icon nzType="bg-colors"></i>
    </span>
    <nz-dropdown-menu #menu>
      <ul nz-menu>
        <li
          *ngFor="let option of options"
          nz-menu-item
          (click)="setTheme(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
})
export class ThemePickerComponent {
  constructor(
    private themeService: ThemeService,
    private nzMessageService: NzMessageService,
  ) { }

  options: { label: string; value: ThemeType }[] = [
    {
      label: '默认主题',
      value: 'default',
    },
    {
      label: '紧凑主题',
      value: 'compact',
    },
    {
      label: '暗黑主题',
      value: 'dark',
    },
  ];

  setTheme(theme: ThemeType): void {
    timer(300).subscribe(() => {
      const refer = this.nzMessageService.loading('正在切换主题', { nzDuration: 0 });
      this.themeService.set(theme).subscribe(() => {
        this.nzMessageService.remove(refer.messageId);
      }, () => {
        this.nzMessageService.remove(refer.messageId);
        this.nzMessageService.error('主题切换失败');
      });
    });
  }


}
