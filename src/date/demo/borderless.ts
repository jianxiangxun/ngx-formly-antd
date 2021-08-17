import { subYears, subMonths, subWeeks } from 'date-fns';

export const model = {
  date: [subYears(new Date(), 1), new Date()],
  range: [subYears(new Date(), 1), new Date()],
};

export const options = {};

export const fields = [
  {
    key: 'date',
    type: 'date-range',
    templateOptions: {
      label: 'date',
      placeholder: 'please select date',
      mode: 'date',
      allowClear: true,
      required: true,
      borderless: true,
      ranges: {
        'last week': [ subWeeks(new Date(), 1), new Date()],
        'last month': [ subMonths(new Date(), 1), new Date()],
      },
    },
  },
  {
    key: 'range',
    type: 'date-range',
    templateOptions: {
      label: 'date-time',
      placeholder: 'please select datetime',
      mode: 'date',
      showTime: true,
      allowClear: true,
      required: true,
      borderless: true,
      ranges: {
        'last week': [ subWeeks(new Date(), 1), new Date()],
        'last month': [ subMonths(new Date(), 1), new Date()],
      },
    },
  },
];
