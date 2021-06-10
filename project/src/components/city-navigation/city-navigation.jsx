import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CITYES } from '../../const';

export default function CityNavigation({ currentMenu, changeActiveMenu }) {
  return (
    <ul className="locations__list tabs__list">
      {
        CITYES.map((name, index) => (
          <li key={name + String(index)} className="locations__item">
            <a
              href="/#"
              className={classNames('locations__item-link', 'tabs__item', {
                'tabs__item--active': name === currentMenu,
              })}
              onClick={() => { changeActiveMenu(name); }}
            >
              <span>{name}</span>
            </a>
          </li>
        ))
}
    </ul>
  );
}

CityNavigation.propTypes = {
  currentMenu: PropTypes.string.isRequired,
  changeActiveMenu: PropTypes.func.isRequired,
};
