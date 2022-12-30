import React from 'react';
import { Input } from 'antd';
import { InputProps, PasswordProps, TextAreaProps, SearchProps } from 'antd/lib/input';

import './InputComponent.scss';

const InputComponent = (props: InputProps) => {
  return <Input className="input" {...props} />;
};

const Password = (props: PasswordProps) => {
  return <Input.Password className="input--password" {...props} />;
};

const TextArea = (props: TextAreaProps) => {
  return <Input.TextArea className="input--textarea" {...props} />;
};

const Search = (props: SearchProps) => {
  return <Input.Search className="input--search" {...props} />;
};

InputComponent.Password = Password;
InputComponent.TextArea = TextArea;
InputComponent.Search = Search;

export default InputComponent;
