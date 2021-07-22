import React from 'react';
import { render } from '@testing-library/react';
import Loader from './loader';


describe('Test Map component', () => {

  it('Should render correctly', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
