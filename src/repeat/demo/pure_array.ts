export const model = {
  condition: [[[null, null, null]]],
};

export const options = {};

export const fields = [
  {
    key: 'condition',
    type: 'repeat',
    defaultValue: [[null, null, null]],
    templateOptions: {
      notAllowEmpty: true,
      addBtnIcon: 'plus',
      addBtnBlock: true,
    },
    fieldArray: {
      wrappers: ['card'],
      fieldGroup: [
        {
          type: 'repeat',
          defaultValue: [null, null, null],
          templateOptions: {
            notAllowEmpty: true,
            inline: true,
          },
          fieldArray: {
            fieldGroup: [
              {
                type: 'grid',
                templateOptions: {
                  gutter: 8,
                },
                fieldGroup: [
                  {
                    type: 'grid',
                    templateOptions: {
                      span: 8,
                      grid: {
                        flex: 1,
                      },
                    },
                    fieldGroup: [
                      {
                        key: '0',
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
                        key: '1',
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
                        key: '2',
                        type: 'number',
                        defaultValue: null,
                        templateOptions: {
                          required: true,
                          placeholder: 'please input number',
                          min: 0,
                        },
                      },
                    ],
                  },
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
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'grid',
          templateOptions: {
            justify: 'end',
          },
          fieldGroup: [
            {
              type: 'repeat-action',
              templateOptions: {
                icon: 'delete',
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
