import { subYears, subMonths, subWeeks } from 'date-fns';

export const model = {
  date: [subYears(new Date(), 1), new Date()],
  dateTime: [subYears(new Date(), 1), new Date()],
  week: [subYears(new Date(), 1), new Date()],
  month: [subYears(new Date(), 1), new Date()],
  year: [subYears(new Date(), 1), new Date()],
};

export const options = {};

export const fields = [
  {
    key: 'date',
    type: 'date-range',
    templateOptions: {
      label: 'date',
      placeholder: ['start', 'end'],
      mode: 'date',
      allowClear: true,
      required: true,
      ranges: {
        'last week': [ subWeeks(new Date(), 1), new Date()],
        'last month': [ subMonths(new Date(), 1), new Date()],
      },
    },
  },
  {
    key: 'dateTime',
    type: 'date-range',
    templateOptions: {
      label: 'date-time',
      placeholder: ['start', 'end'],
      mode: 'date',
      showTime: true,
      allowClear: true,
      required: true,
      ranges: {
        'last week': [ subWeeks(new Date(), 1), new Date()],
        'last month': [ subMonths(new Date(), 1), new Date()],
      },
    },
  },
  {
    key: 'week',
    type: 'date-range',
    templateOptions: {
      label: 'week',
      placeholder: ['start', 'end'],
      mode: 'week',
      allowClear: true,
      required: true,
      ranges: {
        'last week': [ subWeeks(new Date(), 1), new Date()],
        'last month': [ subMonths(new Date(), 1), new Date()],
      },
    },
  },
  {
    key: 'month',
    type: 'date-range',
    templateOptions: {
      label: 'month',
      placeholder: ['start', 'end'],
      mode: 'month',
      allowClear: true,
      required: true,
      ranges: {
        'last year': [ subMonths(new Date(), 1), new Date()],
      },
    },
  },
  {
    key: 'year',
    type: 'date-range',
    templateOptions: {
      label: 'year',
      placeholder: ['start', 'end'],
      mode: 'year',
      allowClear: true,
      required: true,
    },
  },
];
