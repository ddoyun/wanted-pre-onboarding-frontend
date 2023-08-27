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
  .addTodoLine {
    ${({ theme }) => theme.MIXINS.flexBasic()}
    position: relative;
    &::before {
      content: '';
      width: 2px;
      height: 15px;
      background-color: #fff;
      position: absolute;
    }
    &::after {
      content: '';
      width: 1.5px;
      height: 15px;
      transform: rotate(90deg);
      background-color: #fff;
      position: absolute;
    }
  }
`;
