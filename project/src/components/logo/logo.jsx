import React from 'react';
import PropTypes from 'prop-types';
import { LogoParrent } from '../../const/const.js';
import { AppRouts } from '../../const/const.js';
import { Link } from 'react-router-dom';

const LogoSize = {
  [LogoParrent.HEADER]: { width: 81, height: 41 },
  [LogoParrent.FOOTER]: { width: 64, height: 33 },
};

export default function Logo({ parrent }) {
  const { width, height } = LogoSize[parrent];
  const linkClass = `${parrent}__logo-link`;
  const imageClass =  `${parrent}__logo`;
  return (
    <Link className={linkClass} to= {AppRouts.ROOT}>
      <img className={imageClass} src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}

Logo.propTypes = {
  parrent: PropTypes.string,
};
