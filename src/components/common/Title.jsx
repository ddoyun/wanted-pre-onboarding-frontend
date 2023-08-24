import { forwardRef } from 'react';
import React from 'react';
import styled from 'styled-components';

const Title = forwardRef(({ as, size, color, margin, weight, ...props }, ref) => {
  return (
    <Element
      as={as || 'div'}
      ref={ref}
      {...props}
      style={{ fontSize: size, color, margin: margin, fontWeight: weight }}
    />
  );
});

export default Title;

const Element = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto 60px 0;
`;
