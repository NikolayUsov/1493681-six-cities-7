import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';
import { LoaderType } from '../../const';

const loaderStyle = {
  display: 'block',
  margin: '100px auto 0',
};
const DEFAULT_COLOR = '#4481c3';
const DEFAULT_SIZE = '150px';

function Loader({ color, size, type }) {
  switch (type) {
    case LoaderType.button:
      return (<ClipLoader color={color} />);
    case LoaderType.page:
      return (
        <HashLoader
          css={loaderStyle}
          color={color}
          size={size}
        />
      );
    default: throw new Error(`Unknow loader ${type}`);
  }
}

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};

Loader.defaultProps = {
  color: DEFAULT_COLOR,
  size: DEFAULT_SIZE,
  type: LoaderType.page,
};

export default Loader;
