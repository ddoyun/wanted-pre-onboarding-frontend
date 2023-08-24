import { forwardRef } from 'react';
import React from 'react';
import styled from 'styled-components';

const Button = forwardRef(({ as, bgColor, color, margin, width, ...props }, ref) => {
  return (
    <Element
      as={as || 'button'}
      ref={ref}
      {...props}
      style={{ backgroundColor: bgColor, color, margin: margin, width }}
    />
  );
});

export default Button;

const Element = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.styles.button};
  margin-top: 10px;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: auto;
  }
`;
