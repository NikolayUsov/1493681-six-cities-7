import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { CITIES } from '../../const';

import { selectCurrentCity, changeCity } from '../../store/reducers/features/app/app-slice';

function CityNavigation() {
  const currentMenu = useSelector(selectCurrentCity);
  const dispatch = useDispatch();

  const handleChangeCity = (name) => {
    dispatch(changeCity(name));
  };

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
                  onClick={() => { handleChangeCity(name); }}
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

export default CityNavigation;
