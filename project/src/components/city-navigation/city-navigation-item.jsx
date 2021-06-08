import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function CityNavigationItem({name, current, changeActiveMenu}) {
  const linkClass = classNames('locations__item-link','tabs__item',{
    'tabs__item--active': name === current,
  });

  return(
    <li className="locations__item">
      <a href="/#"
        className={linkClass}
        data-type={name}
        onClick={(evt) => {changeActiveMenu(evt.currentTarget.dataset.type);}}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

CityNavigationItem.propTypes = {
  name: PropTypes.string,
  current: PropTypes.string,
  changeActiveMenu: PropTypes.func,
};
