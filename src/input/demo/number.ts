export const model = {
  decimal: 0.98,
  count: 15,
};

export const options = {};

export const fields = [
  {
    key: 'decimal',
    type: 'number',
    templateOptions: {
      label: 'decimal',
      placeholder: 'please input',
      precision: 2,
      step: 0.1,
      min: 0,
      max: 1,
      required: true,
    },
  },
  {
    key: 'count',
    type: 'integer',
    templateOptions: {
      label: 'count',
      placeholder: 'please input count',
      min: 1,
      step: 1,
      required: true,
    },
  },
];
