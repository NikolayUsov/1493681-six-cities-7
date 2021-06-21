import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import PropTypes from 'prop-types';

const loaderStyle = {
  display: 'block',
  margin: '100px auto 0',
};

const DEFAULT_COLOR = '#4481c3';
const DEFAULT_SIZE = '150';

function Loader({ color, size }) {
  return (
    <HashLoader
      css={loaderStyle}
      color={color}
      size={size}
    />
  );
}

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

Loader.defaultProps = {
  color: DEFAULT_COLOR,
  size: DEFAULT_SIZE,
};

export default Loader;
