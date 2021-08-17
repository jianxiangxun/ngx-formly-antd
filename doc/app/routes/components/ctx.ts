import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

interface DemoConfig {
  [key: string]: {
    [key: string]: {
      config: {
        model?: any;
        options?: FormlyFormOptions;
        fields: FormlyFieldConfig[];
      };
      raw: string;
    };
  };
}

const ctx = require.context('src', true, /\.\/(\w+)\/demo\/(\w+).ts$/);

export const keys = ctx.keys().map(key => {
  const [, mo, co ] = key.match(/\.\/(\w+)\/demo\/(\w+).ts$/) as RegExpMatchArray;
  return { key, mo, co };
});

export const demo: DemoConfig = keys.reduce((data, item) => {
  const config = ctx(item.key);
  const raw = require('!raw-loader!src/' + item.mo + '/demo/' + item.co + '.ts').default;
  data[item.mo] ??= {};
  data[item.mo][item.co] = { config, raw };
  return data;
}, {} as DemoConfig);
