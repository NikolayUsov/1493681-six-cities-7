import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorRequest from './error-request';

describe('Test Error-component', () => {
  it('Should render correctly', () => {
    render(
      <ErrorRequest />,
    );
    expect(screen.queryByText('Failed request. Try-again')).toBeInTheDocument();
  });
});
