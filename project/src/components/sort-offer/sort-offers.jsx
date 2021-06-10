/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import classNames from 'classnames';
import { SORT_TYPES } from '../../const';

export default function SortOffers() {
  const [isOpen, setOpenMenu] = useState(false);
  const [currentSort, setCurrentSort] = useState(SORT_TYPES[0]);
  const sortMenuClass = classNames('places__options', 'places__options--custom', { 'places__options--opened': isOpen });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setOpenMenu((state) => !state)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul onClick={(evt) => setCurrentSort(evt.target.textContent)} className={sortMenuClass}>
        {SORT_TYPES.map((elem, index) => (
          <li
            key={elem + String(index)}
            className={classNames('places__option', { 'places__option--active': currentSort === elem })}
            tabIndex={0}
          >
            {elem}
          </li>
        ))}
      </ul>
    </form>
  );
}
