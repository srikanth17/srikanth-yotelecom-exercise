import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../reducers';
import { Customer, CustomerResponse } from '../types/types';
import { getCustomers } from '../utils/utils';
import theme from '../theme';
import logo from '../logo.png';

const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  width: 186px;
  background: ${theme.palette.background.main};
  position: absolute;
  height: 100%;
  overflow: auto;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.14);
`;

const Topbar = styled.div`
  left: 186px;
  margin: 0;
  padding: 0;
  width: 100%;
  background: ${theme.palette.background.main};
  height: 79px;
  overflow: auto;
  border: 1px solid rgba(196, 196, 196, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.14);
`;

const Wrapper = styled.div`
  background: ${theme.palette.background.main};
  margin: 38px 20px 0 227px;
  padding-bottom: 25px;
  height: 100%;
`;

const Logo = styled.img`
  width: 121px;
  height: 22.43px;
  padding-top: 34px;
  padding-left: 32px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-left: ${theme.spacing(5)};

  td,
  th {
    color: ${theme.palette.text.customer};
    font-family: Roboto;
    font-weight: normal;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }

  td {
    white-space: pre;
  }
`;

const Heading = styled.h1`
  padding-left: 18px;
  padding-top: 31px;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: ${theme.palette.text.customer};
`;

const mapState = (state: RootState) => ({
  token: state.auth.token,
});

type CustomersProps = ReturnType<typeof mapState>;

const Customers = ({ token }: CustomersProps) => {
  const [customers, setCustomers] = useState([] as Customer[]);

  useEffect(() => {
    getCustomers(token).then(response => {
      if (response.ok) {
        response.json().then((res: CustomerResponse) => {
          setCustomers(res.content);
        });
      } else {
        console.log('error');
      }
    });
  }, [token]);

  return (
    <div>
      <Sidebar>
        <Logo src={logo} alt="logo" />
      </Sidebar>
      <Topbar></Topbar>
      <Wrapper>
        <Heading>Customers that have registered for Pharmacy opt-in</Heading>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.externalId}>
                <td>
                  {customer.forename} {customer.surname}
                </td>
                <td>{customer.email}</td>
                <td>
                  {customer.phones.length > 0 && customer.phones[0].phoneNumber}
                </td>
                <td>{customer.contactProfiles[0].profileValue}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </div>
  );
};

export default connect(mapState)(Customers);
