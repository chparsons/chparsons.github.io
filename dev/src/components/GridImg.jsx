import React from 'react';

export default ({ src, style, ...props }) =>
  <img
    src={src}
    style={{
      width: '100%',
      ...(style || {}),
    }}
    {...props}
  />

