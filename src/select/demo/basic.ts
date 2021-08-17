export const model = {
  system: 2,
  users: [3],
};

export const options = {};

export const fields = [
  {
    key: 'system',
    type: 'select',
    templateOptions: {
      label: 'system',
      placeholder: 'please select system',
      options: [
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
      ],
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
      options: [
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
      ],
      allowClear: true,
      required: true,
    },
  },
];
