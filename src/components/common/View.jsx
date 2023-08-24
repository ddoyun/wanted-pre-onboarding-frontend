import React, { forwardRef } from 'react';

const View = forwardRef(({ as, ...props }, ref) => {
  const Element = as || 'div';
  return <Element ref={ref} {...props} />;
});

export default View;
