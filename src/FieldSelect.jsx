import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const Option = Select.Option;

const FieldSelect = ({ fields, onChange, id }) => {
  return (
    <div>
      <Select
        style={{ width: 120 }}
        onChange={(field) => onChange({ field, id })}
      >
        {fields.map((key) => {
          return (
            <Option value={key} key={key}>
              {key}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default FieldSelect;
