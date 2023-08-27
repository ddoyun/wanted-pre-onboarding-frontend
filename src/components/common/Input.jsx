import { forwardRef } from 'react';
import React from 'react';
import styled from 'styled-components';

const Input = forwardRef(({ as, type, ...props }, ref) => {
  return <Element as={as || 'input'} type={type || 'text'} ref={ref} {...props} />;
});

export default Input;

const Element = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 30px;
  &[type='checkbox'] {
    display: none;
  }
`;
