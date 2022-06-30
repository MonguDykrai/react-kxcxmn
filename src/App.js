import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, PlusOutlined, Switch, Table } from 'antd';
import 'antd/dist/antd.css';
import FieldSelect from './FieldSelect';
import _ from 'lodash';
import renderMap from './renderMap';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('javascript', javascript);

export default function App() {
  const [checked, setChecked] = useState(false);
  const dataSource = [
    {
      id: 0,
      name: 'jack',
      age: 40,
      gender: 'male',
    },
    {
      id: 1,
      name: 'rose',
      age: 32,
      gender: 'female',
    },
  ];
  const fields = Object.keys(dataSource[0]);
  const [selects, setSelects] = useState([
    { id: 0, field: '', selected: false },
  ]);

  useEffect(() => {
    console.log(selects);
  }, [selects]);

  // const columns = hljs.highlight(
  //   JSON.stringify(
  //     [
  //       {
  //         title: '开启效果流',
  //         dataIndex: 'checked',
  //         key: 'checked',
  //         // render: (value, record) => (
  //         //   <Switch
  //         //     key={record.id}
  //         //     defaultChecked
  //         //     onChange={(checked) => console.log(checked)}
  //         //   />
  //         // ),
  //         // render: renderMap.switch.render.fn,
  //         render: renderMap.switch.render.fnStr,
  //       },
  //     ],
  //     null,
  //     2
  //   ),
  //   {
  //     language: 'javascript',
  //   }
  // );

  // const columns = hljs.highlight(
  //   `[
  //     {
  //       title: '开启效果流',
  //       dataIndex: 'checked',
  //       key: 'checked',
  //       // render: (value, record) => (
  //       //   <Switch
  //       //     key={record.id}
  //       //     defaultChecked
  //       //     onChange={(checked) => console.log(checked)}
  //       //   />
  //       // ),
  //       // render: renderMap.switch.render.fn,
  //       render: ${renderMap.switch.render.fnStr},
  //     },
  //   ]`,
  //   {
  //     language: 'javascript',
  //   }
  // );

  const columns = hljs.highlight(
    `[
       {
         title: '开启效果流',
         dataIndex: 'checked',
         key: 'checked',
         render: ${renderMap.switch.render.fnStr},
       },
     ]`,
    {
      language: 'javascript',
    }
  );

  return (
    <div>
      {selects.map((select) => {
        return (
          <FieldSelect
            fields={fields}
            key={select.id}
            id={select.id}
            onChange={({ field, id }) => {
              const copy = _.cloneDeep(selects);
              const index = copy.findIndex((select) => select.id === id);
              copy[index].field = field;
              copy[index].selected = true;
              setSelects(copy);
            }}
          />
        );
      })}
      <div>
        <Switch defaultChecked onChange={(checked) => console.log(checked)} />
      </div>
      {/* <FieldSelect fields={fields} /> */}
      <Button
        onClick={() => {
          setSelects([
            ...selects,
            {
              id: selects.length,
              field: '',
              selected: false,
            },
          ]);
        }}
      >
        +
      </Button>
      {/* <PlusOutlined /> */}
      <Table
        rowKey="id"
        columns={[
          {
            title: '开启效果流',
            dataIndex: 'checked',
            key: 'checked',
            // render: (value, record) => (
            //   <Switch
            //     key={record.id}
            //     defaultChecked
            //     onChange={(checked) => console.log(checked)}
            //   />
            // ),
            render: renderMap.switch.render.fn,
          },
        ]}
        dataSource={[
          {
            id: 0,
            checked: true,
          },
        ]}
      />
      {/* <div
        dangerouslySetInnerHTML={{
          __html: columns.value,
        }}
      ></div> */}
      <pre
        dangerouslySetInnerHTML={{
          __html: columns.value,
        }}
      ></pre>
      {/* <code
        dangerouslySetInnerHTML={{
          __html: columns.value,
        }}
      ></code> */}
      {/* <pre
        dangerouslySetInnerHTML={{
          __html: columns.value,
        }}
      ></pre> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: columns.value,
        }}
      ></div> */}
    </div>
  );
}

[
  {
    title: '开启效果流',
    dataIndex: 'checked',
    key: 'checked',
    render: (value, record) => (
      <Switch
        key={record.id}
        defaultChecked
        onChange={(checked) => console.log(checked)}
      />
    ),
  },
];
