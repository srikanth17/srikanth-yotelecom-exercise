import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  text-align: center;
`;

const Dashboard = () => (
  <Wrapper>
    <h1>Select an option</h1>
    <div>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
      <Link to="/admin">
        <Button>Admin</Button>
      </Link>
    </div>
  </Wrapper>
);

export default Dashboard;
