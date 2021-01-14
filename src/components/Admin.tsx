import React, { useState } from 'react';
import styled from 'styled-components';
import { History } from 'history';
import { ThunkDispatch } from 'redux-thunk';
import authReducer from '../reducers/auth';
import theme from '../theme';
import Input from './Input';
import { SetTokenAction, AuthResponse, UserRequest } from '../types/types';
import { setToken } from '../actions/auth';
import { connect } from 'react-redux';
import { authenticate } from '../utils/utils';
import Container from './Container';

const MobileView = styled(Container)`
  max-width: 600px;
`;

const FormWrapper = styled.div`
  position: absolute;
  width: 326px;
  background: ${theme.palette.background.main};
  border-radius: 30.8px;
`;

const CustomForm = styled.form`
  padding-left: 54px;
  padding-right: 55px;
`;

const SubHeading = styled.h6`
  margin-top: 50px;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: ${theme.palette.text.secondary};
`;

const Button = styled.button`
  background: #000000;
  border: none;
  border-radius: ${theme.spacing()};
  color: ${theme.palette.button.main};
  padding: 15px 30px;
  ${theme.typography.button};
  display: block;
  margin: 50px auto;
`;

const mapDispatch = (
  dispatch: ThunkDispatch<typeof authReducer, void, SetTokenAction>
) => ({
  setToken: (token: string) => dispatch(setToken(token)),
});

interface OwnProps {
  history: History;
}

type AdminProps = ReturnType<typeof mapDispatch> & OwnProps;

const Admin = ({ history, setToken }: AdminProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: UserRequest = {
      name,
      password,
    };
    authenticate(data).then(response => {
      if (response.ok) {
        response.json().then((res: AuthResponse) => {
          setToken(res.accessToken);
          history.push('/customers');
        });
      } else {
        setError(true);
      }
    });
  };

  return (
    <MobileView>
      <FormWrapper>
        <SubHeading>Enter your login credentials</SubHeading>
        <CustomForm onSubmit={handlesubmit}>
          <Input
            type="email"
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Button type="submit">Login</Button>
          {error && <SubHeading>Username or password is incorrect</SubHeading>}
        </CustomForm>
      </FormWrapper>
    </MobileView>
  );
};

export default connect(undefined, mapDispatch)(Admin);
