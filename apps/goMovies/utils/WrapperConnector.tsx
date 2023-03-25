import React from 'react';
import ThemWrapper from '../components/ThemWrapper';

export const themConnector = (element: React.ReactElement) => (
  <ThemWrapper>{element}</ThemWrapper>
);
