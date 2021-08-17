import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { demo } from './ctx';

@Component({
  selector: 'doc-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.less'],
})
export class ComponentsComponent implements OnInit {

  demos: {
    [key: string]: {
      config: {
        model?: any;
        options?: FormlyFormOptions;
        fields: FormlyFieldConfig[];
      };
      raw: string;
    };
  } = {};

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.routeConfig?.path as string;
    this.demos = demo[id];
    console.log(id, this.demos);
  }

}
