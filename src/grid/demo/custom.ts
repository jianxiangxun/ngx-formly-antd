export const model = {
  company: 'test company',
  website: 'https://www.google.com',
  username: 'tom',
  email: 'tom@google.com',
};

export const options = {};

export const fields = [
  {
    type: 'grid',
    templateOptions: {
      span: 8,
    },
    fieldGroup: [
      {
        key: 'company',
        type: 'input',
        templateOptions: {
          label: 'company',
          placeholder: 'company name',
          required: true,
        },
      },
      {
        key: 'website',
        type: 'input',
        templateOptions: {
          label: 'website',
          placeholder: 'official website',
          required: true,
        },
      },
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'username',
          placeholder: 'user name',
          required: true,
        },
      },
      {
        key: 'address',
        type: 'textarea',
        templateOptions: {
          label: 'address',
          placeholder: 'email address',
          required: true,
          grid: {
            span: 24,
          },
        },
      },
    ],
  },
];
