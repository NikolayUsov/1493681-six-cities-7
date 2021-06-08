import React, { useState } from 'react';
import classNames from 'classnames';
import { SORT_TYPES } from '../../const.js';

export default function SortOffers() {
  const [isOpen, setOpenMenu] = useState(false);
  const [currentSort, setCurrentSort] = useState(SORT_TYPES[0]);// Этот хук будет поднят в родителя для сортировки
  const sortMenuClass = classNames('places__options', 'places__options--custom', {'places__options--opened': isOpen});

  return(
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
        {SORT_TYPES.map((elem, index) =>(
          <li
            key={elem+String(index)}
            className={classNames('places__option', {'places__option--active': currentSort === elem})}
            tabIndex={0}
          >{elem}
          </li>))}
      </ul>
    </form>
  );
}

