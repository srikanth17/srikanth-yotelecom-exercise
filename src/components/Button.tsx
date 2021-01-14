import styled from 'styled-components';

import theme from '../theme';

const Button = styled.button`
  font-family: 'Roboto';
  background: #000000;
  border: none;
  border-radius: ${theme.spacing()};
  color: ${theme.palette.button.main};
  padding: 15px 30px;
  margin: 15px;
  ${theme.typography.button};
`;

export default Button;
