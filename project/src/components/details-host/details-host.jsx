import React from 'react';
import PropTypes from 'prop-types';


export default function HostDeatails ({ host, description }) {
  const {
    avatarUrl,
    isPro,
    name,
  } = host;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {isPro &&
        (
          <span className="property__user-status">
          Pro
          </span>
        )}

      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

HostDeatails.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
  description: PropTypes.string,
};


