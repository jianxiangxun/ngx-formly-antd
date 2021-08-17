import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const model = {
  system: 2,
  users: [2],
};

export const options = {};

export const fields = [
  {
    key: 'system',
    type: 'select',
    templateOptions: {
      label: 'system',
      placeholder: 'please select system',
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
      allowClear: true,
      required: true,
    },
  },
  {
    key: 'users',
    type: 'select',
    templateOptions: {
      label: 'users',
      placeholder: 'please select user',
      multiple: true,
      options: of([
        {
          value: 1,
          label: 'david',
        },
        {
          value: 2,
          label: 'lily',
        },
        {
          value: 3,
          label: 'tom',
        },
      ]).pipe(delay(1500)),
      allowClear: true,
      required: true,
    },
  },
];
