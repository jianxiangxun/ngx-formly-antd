export const model = {
  website: 'google',
  cost: 1.11,
};

export const options = {};

export const fields = [
  {
    key: 'website',
    type: 'input',
    templateOptions: {
      label: 'website',
      placeholder: 'type is input',
      addOnBeforeText: 'https://',
      addOnAfterText: '.com',
      required: true,
    },
  },
  {
    key: 'cost',
    type: 'number',
    templateOptions: {
      label: 'cost',
      placeholder: 'type is input',
      addOnBeforeIcon: 'money-collect',
      addOnAfterIcon: 'cloud-sync',
      required: true,
    },
  },
];
