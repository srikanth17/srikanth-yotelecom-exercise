import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  border: none;
  color: ${theme.palette.text.primary};
  background-color: transparent;
  border-bottom: 1px solid #a2a2a2;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  margin: 0 0 ${theme.spacing(2)} 0;
  padding-top: 5px;
`;

export default Input;
