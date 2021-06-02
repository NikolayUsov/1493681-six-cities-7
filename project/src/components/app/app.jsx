import React from 'react';
import PageMain from '../page-main/page-main.jsx';
import PropTypes from 'prop-types';

function App({ offers = [] }) {

  return(
    <PageMain offers={offers}/>
  );

}

App.propTypes  = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default App;
