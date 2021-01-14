import React, { useState } from 'react';
import styled from 'styled-components';
import { History } from 'history';

import Container from './Container';
import Input from './Input';

import { registerCustomer } from '../utils/utils';
import { RegisterRequest } from '../types/types';
import theme from '../theme';

import logo from '../logo.png';

const MobileView = styled(Container)`
  max-width: 600px;
`;

const FormWrapper = styled.div`
  position: absolute;
  width: 326px;
  background: ${theme.palette.background.main};
  border-radius: 30.8px;
`;

const Logo = styled.img`
  width: 198px;
  height: 37px;
  padding-top: 55px;
  padding-left: 63px;
`;

const SubHeading = styled.h6`
  margin-top: 19px;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: ${theme.palette.text.secondary};
`;

const Form = styled.form`
  padding-left: 54px;
  padding-right: 55px;
`;

const GenderWrapper = styled.div`
  border-bottom: 1px solid ${theme.palette.border};
  height: 3rem;
`;

const GenderLabel = styled.label`
  height: 3rem;
  float: left;
  margin-top: 15px;
`;

const Gender = styled.select`
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${theme.palette.text.primary};
  outline: none;
  height: 3rem;
  padding: 0;
  float: right;
  display: block;
`;

const CheckboxWrapper = styled.div`
  margin-top: ${theme.spacing(6)};
  margin-bottom: 35px;
`;

const CheckboxLabel = styled.label`
  font-size: 18px;
  color: ${theme.palette.text.checkbox};
`;

const Checkboxes = styled.div`
  margin-top: 34px;
  input[type='checkbox'] {
    margin-right: ${theme.spacing(2)};
    border: 1px solid #6f6f6f;
    border-radius: 4px;
  }
  & > label {
    padding-right: 31px;
  }
`;

const Button = styled.button`
  ${theme.typography.button}
  background: ${theme.palette.button.save};
  color: ${theme.palette.button.main};
  border-radius: 29.3px;
  width: 188px;
  height: 53px;
  border: none;
  display: block;
  margin: 0 auto;
`;

const FooterText = styled.p`
  font-size: ${theme.spacing(3)};
  text-align: center;
`;

interface RegisterProps {
  history: History;
}

const Register = ({ history }: RegisterProps) => {
  const [error, setError] = useState(false);

  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState('');
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: RegisterRequest = {
      forename,
      surname,
      gender,
      email,
      organisationId: '355d3529-a6c1-470b-983a-845b604a3976',
      trackAndTrace: true,
    };

    registerCustomer(data).then(response => {
      if (response.ok) {
        history.push('/success');
      } else {
        setError(true);
      }
    });
  };

  const handleForenameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setForename(e.currentTarget.value);
  };

  const handleSurnameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSurname(e.currentTarget.value);
  };

  const handleGenderChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setGender(e.currentTarget.value);
  };

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <MobileView>
      <FormWrapper>
        <Logo src={logo} alt="logo" />
        <SubHeading>Connect with email</SubHeading>
        <Form onSubmit={handlesubmit}>
          <Input
            type="text"
            placeholder="Forename"
            value={forename}
            onChange={handleForenameChange}
            required
          />
          <Input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={handleSurnameChange}
            required
          />
          <GenderWrapper>
            <GenderLabel>
              <label>Gender:</label>
            </GenderLabel>
            <Gender value={gender} onChange={handleGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Gender>
          </GenderWrapper>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <CheckboxWrapper>
            <CheckboxLabel>
              Do you wish for us to be your nominated Pharmacy?
            </CheckboxLabel>
            <Checkboxes>
              <input
                type="checkbox"
                checked={yesChecked}
                onChange={() => setYesChecked(!yesChecked)}
                required={noChecked ? false : true}
              />
              <label>Yes</label>
              <input
                type="checkbox"
                checked={noChecked}
                onChange={() => setNoChecked(!noChecked)}
                required={yesChecked ? false : true}
              />
              <label>No</label>
            </Checkboxes>
          </CheckboxWrapper>
          <Button type="submit">Save</Button>
          {error && <SubHeading>Error in registering</SubHeading>}
          <FooterText>Click here to read our Privacy Policy</FooterText>
        </Form>
      </FormWrapper>
    </MobileView>
  );
};

export default Register;
