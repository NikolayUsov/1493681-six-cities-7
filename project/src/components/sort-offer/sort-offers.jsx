/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, { useState } from 'react';
import classNames from 'classnames';
import { SORT_TYPES } from '../../const';

export default function SortOffers() {
  const [isVisible, setVisible] = useState(false);
  const [currentSort, setCurrentSort] = useState(SORT_TYPES[0]);
  const sortMenuClasses = classNames('places__options', 'places__options--custom', { 'places__options--opened': isVisible });

  const handleOnChangeSort = (evt, currSort) => {
    const isEnter = evt.type === 'keydown' && evt.keyCode === 13;
    const isClick = evt.type === 'click';

    if (isEnter || isClick) {
      setCurrentSort(currSort);
      setVisible((prefState) => !prefState);
    }
  };

  const handlerOnKeyDownVisibleMenu = (evt) => {
    if (evt.keyCode === 13) {
      setVisible((prefState) => !prefState);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onKeyDown={(evt) => handlerOnKeyDownVisibleMenu(evt)}
        onClick={() => setVisible((state) => !state)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={sortMenuClasses}>
        {SORT_TYPES.map((elem, index) => (
          <li
            onKeyDown={(evt) => handleOnChangeSort(evt, elem)}
            onClick={(evt) => handleOnChangeSort(evt, elem)}
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
