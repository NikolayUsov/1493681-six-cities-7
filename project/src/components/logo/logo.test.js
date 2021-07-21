import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Logo from './logo';

describe('Test Logo', () => {
  it('Should render correctly', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );
    expect(screen.queryByAltText('6 cities logo')).toBeInTheDocument();
  });
});
