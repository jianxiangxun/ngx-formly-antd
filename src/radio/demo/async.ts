import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const model = {
  system: 3,
};

export const options = {};

export const fields = [
  {
    key: 'system',
    type: 'radio',
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
    },
  },
];
