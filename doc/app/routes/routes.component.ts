import { SiderMenu } from 'doc/app/components/layout/layout.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-routes',
  template: `
    <doc-layout [menus]="menus">
      <router-outlet></router-outlet>
    </doc-layout>
  `,
  styles: [
  ],
})
export class RoutesComponent {

  menus: SiderMenu[] = [
    {
      type: 'item',
      title: 'getting started',
      route: '/getting-started',
    },
    {
      type: 'group',
      title: 'Components',
      children: [
        {
          type: 'item',
          title: 'input',
          route: '/components/input',
        },
        {
          type: 'item',
          title: 'checkbox',
          route: '/components/checkbox',
        },
        {
          type: 'item',
          title: 'radio',
          route: '/components/radio',
        },
        {
          type: 'item',
          title: 'select',
          route: '/components/select',
        },
        {
          type: 'item',
          title: 'date',
          route: '/components/date',
        },
      ],
    },
    {
      type: 'group',
      title: 'Advanced',
      children: [
        {
          type: 'item',
          title: 'grid',
          route: '/components/grid',
        },
        {
          type: 'item',
          title: 'repeat',
          route: '/components/repeat',
        },
      ],
    },
  ];
}
