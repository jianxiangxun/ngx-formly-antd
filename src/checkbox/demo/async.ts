import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const model = {
  system: [2],
};

export const options = {};

export const fields = [
  {
    key: 'system',
    type: 'checkbox-group',
    templateOptions: {
      label: 'system',
      options: of([
        {
          value: 1,
          label: 'Windows',
        },
        {
          value: 2,
          label: 'MacOS',
        },
        {
          value: 3,
          label: 'Linux',
        },
      ]).pipe(delay(2000)),
      required: true,
      indeterminate: true,
    },
  },
];
