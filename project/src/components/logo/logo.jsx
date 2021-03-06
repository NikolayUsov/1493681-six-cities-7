import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

const LogoSize = {
  HEADER: { width: 81, height: 41 },
  FOOTER: { width: 64, height: 33 },
};

export default function Logo({ isFooter }) {
  const { width, height } = isFooter ? LogoSize.FOOTER : LogoSize.HEADER;
  const linkClass = `${isFooter ? 'footer' : 'header'}__logo-link`;
  const imageClass = `${isFooter ? 'footer' : 'header'}__logo`;

  return (
    <Link className={linkClass} to={AppRoutes.ROOT}>
      <img
        className={imageClass}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

Logo.propTypes = {
  isFooter: PropTypes.bool,
};

Logo.defaultProps = {
  isFooter: false,
};
