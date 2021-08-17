export const model = {
  system: 1,
};

export const options = {};

export const fields = [
  {
    key: 'system',
    type: 'radio',
    templateOptions: {
      label: 'system',
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
      required: true,
    },
  },
];
