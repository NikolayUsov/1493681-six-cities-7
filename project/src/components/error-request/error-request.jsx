import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import styles from './error-request.module.scss';

function ErrorReques({ refreshFunc }) {
  return (
    <div className={[styles.container]}>
      <div className={[styles.item]}>
        <a className={[styles.refresh]} href="/#" onClick={refreshFunc}>
          Failed request. Try-again
        </a>
      </div>

    </div>
  );
}

ErrorReques.propTypes = {
  refreshFunc: PropTypes.func,
};

ErrorReques.defaultProps = {
  refreshFunc: () => {},
};
export default ErrorReques;
