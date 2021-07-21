import { render, screen } from '@testing-library/react';
import React from 'react';
import HostDetail from './host-details';

const description = 'Test rendom text';
const host = {
  avatarUrl: '',
  id: 3,
  isPro: false,
  name: 'Jane',
};

describe('Test host-details component', () => {
  it('Should render correctly and has not Pro status', () => {
    render(<HostDetail host={host} description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.queryByText('Pro')).not.toBeInTheDocument();
  });

  it('Should render correctly and has Pro status', () => {
    render(<HostDetail host={{ ...host, isPro: true }} description={description} />);
    expect(screen.queryByText('Pro')).toBeInTheDocument();
  });
});
