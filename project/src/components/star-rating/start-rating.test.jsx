import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StarRating, { StarTitles } from './star-rating';

describe('Test star rating', () => {
  const handleChangeRating = jest.fn();

  it('Should render correctly', () => {
    render(<StarRating currentValue={3} handleChangeRating={handleChangeRating}/>);
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length === Object.keys(StarTitles).length).toBeTruthy();
    expect(radioButtons[2]).toBeChecked();

    userEvent.click(radioButtons[4]);
    expect(handleChangeRating).toBeCalledWith('1');
  });
});
