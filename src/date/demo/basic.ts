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
    },
  },
];
