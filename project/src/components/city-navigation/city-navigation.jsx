import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CITIES } from '../../const';

export default function CityNavigation({ currentMenu, changeActiveMenu }) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
        CITIES.map((name, index) => (
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
      </section>
    </div>
  );
}

CityNavigation.propTypes = {
  currentMenu: PropTypes.string.isRequired,
  changeActiveMenu: PropTypes.func.isRequired,
};
