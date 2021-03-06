import React from 'react';
import IconStyles from './IconStyles';

export default function FaceBookIcon({
  color,
  hoverColor,
  width = 40,
  height = 40,
}) {
  return (
    <IconStyles
      // viewBox='0 0 40 40'
      color={color}
      hoverColor={hoverColor}
      width={width}
      height={height}
    >
      <title>{'facebook'}</title>
      <path d='M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2 4v6h-4c-1.2 0-2 .8-2 2v4h6v6h-6v14h-6V22h-4v-6h4v-5c0-3.8 3.2-7 7-7h5z' />
    </IconStyles>
  );
}
