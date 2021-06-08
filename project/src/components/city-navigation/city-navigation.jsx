import React from 'react';
import { CITYES } from '../../const.js';
import CityNavigationitem from './city-navigation-item';
import PropTypes from 'prop-types';


export default function CityNavigation ({currentMenu, changeActiveMenu}) {

  const menu = {...CITYES};
  return(
    <ul className="locations__list tabs__list">
      {Object.entries(menu)
        .map(([id, name]) =>
          <CityNavigationitem key={id} name={name} current={currentMenu} changeActiveMenu={changeActiveMenu}/>)}
    </ul>
  );
}

CityNavigation.propTypes = {
  currentMenu: PropTypes.string.isRequired,
  changeActiveMenu: PropTypes.func,
};
