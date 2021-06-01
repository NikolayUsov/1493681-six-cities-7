import React from 'react';
import PageMainComponent from '../page-main/page-main.jsx';
import PropTypes from 'prop-types';

function App({offers}) {

  return(
    <PageMainComponent offers={offers}/>
  );

}

App.propTypes  = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

App.defaultProps = {
  offers: [],
};

export default App;
