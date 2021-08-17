export const model = {
  system: [2],
  agreenment: null,
};

export const options = {};

export const fields = [
  {
    key: 'system',
    type: 'checkbox-group',
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
      indeterminate: true,
    },
  },
  {
    key: 'agreenment',
    type: 'checkbox',
    templateOptions: {
      label: 'I Agree!',
      hideLabel: true,
      invisibleLabel: true,
      required: true,
      indeterminate: true,
    },
  },
];
