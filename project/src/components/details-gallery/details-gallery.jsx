import React from 'react';
import PropTypes from 'prop-types';

export default function GalleryDetails({ photos }) {
  return (
    <div className="property__gallery">
      {photos.map((elem) => (
        <div key={elem} className="property__image-wrapper">
          <img className="property__image" src={elem} alt="Pic studio" />
        </div>
      ))}
    </div>

  );
}

GalleryDetails.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
