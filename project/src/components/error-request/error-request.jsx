import React from 'react';
import PropTypes from 'prop-types';
import styles from './error-request.module.scss';

function ErrorRequest({ refreshFunc }) {
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

ErrorRequest.propTypes = {
  refreshFunc: PropTypes.func,
};

ErrorRequest.defaultProps = {
  refreshFunc: () => {},
};
export default ErrorRequest;
