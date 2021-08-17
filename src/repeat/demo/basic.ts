export const model = {
  condition: [{ field: null, op: null, value: null }],
};

export const options = {};

export const fields = [
  {
    key: 'condition',
    type: 'repeat',
    defaultValue: { field: null, op: null, value: null },
    templateOptions: {
      notAllowEmpty: true,
      addBtnIcon: 'plus',
      addBtnBlock: true,
    },
    fieldArray: {
      wrappers: ['card'],
      fieldGroup: [
        {
          key: 'field',
          type: 'select',
          defaultValue: null,
          templateOptions: {
            required: true,
            placeholder: 'please select field',
            options: [
              { value: 1, label: 'field1' },
              { value: 2, label: 'field2' },
            ],
          },
        },
        {
          key: 'op',
          type: 'select',
          defaultValue: null,
          templateOptions: {
            required: true,
            placeholder: 'please select operator',
            options: [
              { value: '=', label: '=' },
              { value: '>', label: '>' },
              { value: '>=', label: '>=' },
              { value: '<', label: '<' },
              { value: '<=', label: '<=' },
            ],
          },
        },
        {
          key: 'value',
          type: 'number',
          defaultValue: null,
          templateOptions: {
            required: true,
            placeholder: 'please input number',
            min: 0,
          },
        },
        {
          type: 'grid',
          templateOptions: {
            justify: 'end',
            gutter: 8,
          },
          fieldGroup: [
            {
              type: 'repeat-action',
              templateOptions: {
                icon: 'plus',
                action: 'add',
                type: 'link',
              },
            },
            {
              type: 'repeat-action',
              templateOptions: {
                icon: 'copy',
                action: 'copy',
                type: 'link',
              },
            },
            {
              type: 'repeat-action',
              templateOptions: {
                icon: 'minus',
                action: 'remove',
                type: 'link',
                danger: true,
              },
            },
          ],
        },
      ],
    },
  },
];
