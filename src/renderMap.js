import React from 'react';
import { Switch } from 'antd';

const renderMap = {
  switch: {
    render: {
      fn: (value, record) => (
        <Switch
          key={record.id}
          defaultChecked
          onChange={(checked) => console.log(checked)}
        />
      ),
      // fnStr: `
      // (value, record) => (
      //   <Switch
      //     key={record.id}
      //     defaultChecked
      //     onChange={(checked) => console.log(checked)}
      //   />
      // ),
      // `,
      fnStr:
        '(value, record) => (<Switch key={record.id} defaultChecked onChange={checked => console.log(checked)} />)',
    },
  },
};

export default renderMap;

[ { "title": "开启效果流", "dataIndex": "checked", "key": "checked", "render": "(value, record) => (<Switch key={record.id} defaultChecked onChange={checked => console.log(checked)} />)" } ]