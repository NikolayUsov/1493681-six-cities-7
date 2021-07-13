/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteListEmpty from './favorite-list-empty';

describe('Test empty Favorites list', () => {
  render(<FavoriteListEmpty />);

  it('Should render correctly', () => {
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
