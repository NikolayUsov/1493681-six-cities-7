import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFoundScreen from './not-found';

describe('Component: NotFoundScreen', () => {
  it('Should render correctly:', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <NotFoundScreen />
      </Router>,
    );
    const headerElement = getByText('Что то ты свернул не туда, может найдем другое');
    const linkElement = getByText('Место');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
