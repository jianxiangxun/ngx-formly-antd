import { getWeek } from 'date-fns';

export const model = {
  date: new Date(),
  dateTime: new Date(),
  week: new Date(),
  month: new Date(),
  year: new Date(),
};

export const options = {};

export const fields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: 'date',
      placeholder: 'please select date',
      mode: 'date',
      allowClear: true,
      required: true,
      disabledDate: (current: Date) => {
        return new Date().getTime() < current.getTime();
      },
    },
  },
  {
    key: 'dateTime',
    type: 'date-time',
    templateOptions: {
      label: 'date-time',
      placeholder: 'please select datetime',
      mode: 'date',
      showTime: true,
      allowClear: true,
      required: true,
      disabledDate: (current: Date) => {
        return new Date().getTime() < current.getTime();
      },
    },
  },
  {
    key: 'week',
    type: 'date',
    templateOptions: {
      label: 'week',
      placeholder: 'please select week',
      mode: 'week',
      allowClear: true,
      required: true,
      disabledDate: (current: Date) => {
        return getWeek(new Date(), { weekStartsOn: 1 }) < getWeek(current, { weekStartsOn: 1 });
      },
    },
  },
  {
    key: 'month',
    type: 'date',
    templateOptions: {
      label: 'month',
      placeholder: 'please select month',
      mode: 'month',
      allowClear: true,
      required: true,
      disabledDate: (current: Date) => {
        return new Date().getTime() < current.getTime();
      },
    },
  },
  {
    key: 'year',
    type: 'date',
    templateOptions: {
      label: 'year',
      placeholder: 'please select year',
      mode: 'year',
      allowClear: true,
      required: true,
      disabledDate: (current: Date) => {
        return new Date().getMonth() < current.getMonth();
      },
    },
  },
];
