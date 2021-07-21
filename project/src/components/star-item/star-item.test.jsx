import React from 'react';
import { render } from '@testing-library/react';
import StarItem from './star-item';

describe('Test star item component', () => {
  const fakeProps = {
    value: '2',
    title: 'badly',
    handleChangeRating: () =>{},
    currentValue: 3,
  };

  it('Should create snapshot correctly', () => {
    const { asFragment } = render(<StarItem {...fakeProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
