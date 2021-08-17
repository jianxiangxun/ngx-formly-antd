import { subYears } from 'date-fns';

export const model = {
  dateTime: new Date(),
  type: 'date',
  date: new Date(),
  range: [subYears(new Date(), 1), new Date()],
};

export const options = {};

export const fields = [
  {
    key: 'type',
    type: 'radio-button',
    templateOptions: {
      required: true,
      options: [
        {
          label: 'date',
          value: 'date',
        },
        {
          label: 'week',
          value: 'week',
        },
        {
          label: 'month',
          value: 'month',
        },
        {
          label: 'year',
          value: 'year',
        },
      ],
    },
  },
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      required: true,
      inline: true,
    },
    expressionProperties: {
      'templateOptions.mode': 'model.type',
    },
  },
  {
    key: 'range',
    type: 'date-range',
    templateOptions: {
      required: true,
      inline: true,
    },
    expressionProperties: {
      'templateOptions.mode': 'model.type',
    },
  },
];
