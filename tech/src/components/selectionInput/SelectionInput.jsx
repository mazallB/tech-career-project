import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { TreeSelect } from 'antd';
// import './SelectionInput.css'

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Html',
    value: '0-0',
    key: '0-0',
   
  },
  {
    title: 'Css',
    value: '0-1',
    key: '0-1',
    
  },
  {
    title: 'Java-Script',
    value: '0-2',
    key: '0-2',
    
  },
  {
    title: 'React',
    value: '0-3',
    key: '0-3',
    
  },
  
];

class SelectionInput extends React.Component {
  state = {
    value: [],
  };

  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: 'Please select',
      style: {
        width: '300px',
      },
    };
    return <TreeSelect {...tProps} />;
  }
}

export default SelectionInput