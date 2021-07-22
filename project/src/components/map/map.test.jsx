import React from 'react';
import { render } from '@testing-library/react';
import Map from './map';
import  { offersStab } from './../../mocs/stab-offers';
import { MemoryRouter } from 'react-router';

describe('Test Map component', () => {
  const fakeProps = {
    city: {
      lat: 52.9392527,
      lng: 4.0813024,
      zoom:5,
    },
    offers: offersStab,
    activeOffer: offersStab[0],
  };

  it('Should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Map {...fakeProps} />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
