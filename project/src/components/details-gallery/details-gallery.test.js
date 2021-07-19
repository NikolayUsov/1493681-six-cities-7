/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsGallery from './details-gallery';

const TEST_PHOTOS_COUNT = 10;
const photos = new Array(TEST_PHOTOS_COUNT).fill('');

describe('Test photos-gallery', () => {
  it('Should render correctly', () => {
    render(<DetailsGallery photos={photos} />);
    expect(screen.getAllByAltText('Pic studio').length).toBe(TEST_PHOTOS_COUNT);
  });
});
