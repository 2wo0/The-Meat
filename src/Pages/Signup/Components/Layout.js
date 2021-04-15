import { Component } from 'react';
import Form from './Form';
import './Layout.scss';

class Layout extends Component {
  render() {
    return (
      <form className="SignUpForm">
        <h1 className="SignUpTitle">
          <em>더미트&</em> 신규 회원가입
        </h1>
        <Form data={inputData} />
        <button className="SignUpBtn">가입하기</button>
      </form>
    );
  }
}

export default Layout;

const inputData = [
  {
    type: 'text',
    text: '아이디',
    class: 'SignUpId',
    state: 'id',
  },
  {
    type: 'password',
    text: '비밀번호',
    class: 'SignUpPw',
    state: 'password',
  },
  {
    type: 'password',
    text: '비밀번호 확인',
    class: 'SignUpPwVerify',
    state: 'passwordVerify',
  },
  {
    type: 'text',
    text: '이름',
    class: 'SignUpName',
    state: 'name',
  },
  {
    type: 'text',
    text: '번호',
    class: 'SignUpPhone',
    state: 'phone',
  },
];
