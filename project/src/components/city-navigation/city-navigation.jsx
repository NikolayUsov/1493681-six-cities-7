import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CITYES } from '../../const';

export default function CityNavigation({ currentMenu, changeActiveMenu }) {
  const menu = { ...CITYES };
  return (
    <ul className="locations__list tabs__list">
      {Object.entries(menu)
        .map(([id, name]) => (
          <li key={id} className="locations__item">
            <a
              href="/#"
              className={classNames('locations__item-link', 'tabs__item', {
                'tabs__item--active': name === currentMenu,
              })}
              data-type={name}
              onClick={(evt) => { changeActiveMenu(evt.currentTarget.dataset.type); }}
            >
              <span>{name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}

CityNavigation.propTypes = {
  currentMenu: PropTypes.string.isRequired,
  changeActiveMenu: PropTypes.func.isRequired,
};
