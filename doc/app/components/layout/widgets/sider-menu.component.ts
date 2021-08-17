import { Component, Input } from '@angular/core';
import { SiderMenu } from '../layout';

@Component({
  selector: 'doc-sider-menu',
  template: `
    <ul nz-menu [nzMode]="'inline'" [nzSelectable]="false">
      <ng-container *ngTemplateOutlet="MenuList; context: { $implicit: menus }"></ng-container>
      <ng-template #MenuList let-menus>
        <ng-container *ngFor="let menu of menus">
          <ng-container *ngIf="menu?.type === 'submenu' && menu?.children?.length; then SubMenu;"></ng-container>
          <ng-container *ngIf="menu?.type === 'group' && menu?.children?.length; then MenuGroup;"></ng-container>
          <ng-container *ngIf="menu?.type === 'item'; then MenuItem;"></ng-container>


          <ng-template #SubMenu>
            <li nz-submenu [nzOpen]="!menu.level">
              <span title [ngStyle]="{'padding-left': menu.level * 24 + 'px'}">
                <ng-container *ngIf="menu.icon; then MenuIcon;"></ng-container>
                <span>{{ menu.title }}</span>
              </span>
              <ul>
                <ng-container *ngTemplateOutlet="MenuList; context: { $implicit: menu.children }"></ng-container>
              </ul>
            </li>
          </ng-template>

          <ng-template #MenuGroup>
            <li nz-menu-group>
              <span title [ngStyle]="{'padding-left': menu.level * 24 + 'px'}">
                <ng-container *ngIf="menu.icon; then MenuIcon;"></ng-container>
                <span>{{ menu.title }}</span>
              </span>
              <ul>
                <ng-container *ngTemplateOutlet="MenuList; context: { $implicit: menu.children }"></ng-container>
              </ul>
            </li>
          </ng-template>


          <ng-template #MenuItem>
            <li nz-menu-item nzMatchRouter class="sider-menu-item">
              <a [routerLink]="[menu.route]" routerLinkActive="router-link-active" [routerLinkActiveOptions]="{ exact: true }" [ngStyle]="{'padding-left': menu.level * 24 + 'px'}">
                <ng-container *ngIf="menu.icon; then MenuIcon;"></ng-container>
                <span>{{menu.title}}</span>
              </a>
            </li>
          </ng-template>

          <ng-template #MenuIcon>
            <i nz-icon [nzType]="menu.icon.type" [nzTheme]="menu.icon.theme" [nzSpin]="menu.icon.spin" [nzTwotoneColor]="menu.icon.color" [nzIconfont]="menu.icon.iconfont" [nzRotate]="menu.icon.rotate"></i>
          </ng-template>
        </ng-container>
      </ng-template>
    </ul>
  `,
})
export class SiderMenuComponent {
  @Input() menus: SiderMenu[] = [];
}
