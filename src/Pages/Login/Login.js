import React, { Component } from 'react';
import Form from './Component/Form';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Form inputData={inputData} buttonData={buttonData} />
      </div>
    );
  }
}

export default Login;

const inputData = [
  {
    type: 'text',
    text: '아이디',
    state: 'id',
    classN: 'idInput',
  },
  {
    type: 'password',
    text: '비밀번호',
    state: 'pw',
    classN: 'pwInput',
  },
];

const buttonData = [
  {
    text: '로그인',
    classN: 'loginBTN',
  },
  {
    text: '회원가입',
    classN: 'signupBTN',
  },
];
