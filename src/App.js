import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, PlusOutlined, Switch, Table } from 'antd';
import 'antd/dist/antd.css';
import FieldSelect from './FieldSelect';
import _ from 'lodash';

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
        columns={[
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
        ]}
        dataSource={[
          {
            id: 0,
            checked: true,
          },
        ]}
      />
    </div>
  );
}
