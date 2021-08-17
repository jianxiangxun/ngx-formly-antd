import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'doc-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less'],
})
export class DemoComponent implements OnInit {

  form = new FormGroup({});
  @Input() title!: string;
  @Input() raw!: string;
  @Input() config!: {
    model?: any;
    options?: FormlyFormOptions;
    fields: FormlyFieldConfig[]
  };
  @Input() model: any = {};
  @Input() options: FormlyFormOptions = {};
  @Input() fields: FormlyFieldConfig[] = [];

  expanded = false;
  isLargeScreen = false;

  constructor(
    private mediaObserver: MediaObserver,
  ) { }

  ngOnInit(): void {
    const { model, options, fields } = this.config;
    if (model) {
      this.model = model;
    }
    if (options) {
      this.options = options;
    }
    this.fields = fields;
    this.mediaObserver.asObservable().subscribe(() => {
      this.isLargeScreen = this.mediaObserver.isActive('gt-xl');
    });
  }

}
