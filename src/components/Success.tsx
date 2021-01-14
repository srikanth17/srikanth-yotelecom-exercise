import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';
import theme from '../theme';

import logo from '../logo.png';

const MobileView = styled(Container)`
  max-width: 600px;
`;

const TickWrapper = styled.div`
  width: 339px;
  height: 278px;
  background: ${theme.palette.background.success};
`;

const Tick = styled.div`
  position: relative;
  display: inline-block;
  width: 179.03px;
  height: 136.56px;
  left: 118px;
  top: 72px;

  &:before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 20px;
    background-color: ${theme.palette.background.main};
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20px;
    width: 100%;
    background-color: ${theme.palette.background.main};
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`;

const ContentWrapper = styled.div`
  width: 339px;
  background: ${theme.palette.background.main};
  border-bottom-right-radius: 30.8px;
  border-bottom-left-radius: 30.8px;
`;

const Logo = styled.img`
  width: 198px;
  height: 37px;
  padding-top: 46px;
  padding-left: 68px;
`;

const RegistrationComplete = styled.h5`
  margin-top: 38px;
  margin-bottom: 59px;
  font-family: Futura PT;
  font-weight: 700;
  font-size: 21px;
  line-height: 18px;
  text-align: center;
  color: ${theme.palette.text.registration};
`;

const Button = styled.button`
  ${theme.typography.button}
  background: ${theme.palette.button.homepage};
  color: ${theme.palette.button.main};
  font-family: Futura PT;
  font-weight: 700;
  border-radius: 29px;
  width: 210px;
  height: 58px;
  border: none;
  display: block;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin-top: 56px;
  padding-bottom: 38px;
  font-size: ${theme.spacing(3)};
  text-align: center;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Success = () => {
  return (
    <MobileView>
      <TickWrapper>
        <Tick></Tick>
      </TickWrapper>
      <ContentWrapper>
        <Logo src={logo} alt="logo" />
        <RegistrationComplete>Registration Complete!</RegistrationComplete>
        <CustomLink to="/">
          <Button type="submit">Homepage</Button>
        </CustomLink>
        <FooterText>Click here to read our Privacy Policy</FooterText>
      </ContentWrapper>
    </MobileView>
  );
};

export default Success;
