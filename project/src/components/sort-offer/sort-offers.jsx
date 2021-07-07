/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { SortFunctions } from '../../const';
import { selectSortType, changeSortType } from '../../store/reducers/features/app/app-slice';

export function SortOffers() {
  const [isVisible, setVisible] = useState(false);

  const currentSort = useSelector(selectSortType);
  const dispatch = useDispatch();
  const sortMenuClasses = classNames('places__options', 'places__options--custom', { 'places__options--opened': isVisible });

  const handleOnChangeSort = (evt, currSort) => {
    const isEnter = evt.type === 'keydown' && evt.keyCode === 13;
    const isClick = evt.type === 'click';

    if (isEnter || isClick) {
      dispatch(changeSortType(currSort));
      setVisible((prevState) => !prevState);
    }
  };

  const handleKeyDownVisibleMenu = (evt) => {
    if (evt.keyCode === 13) {
      setVisible((prevState) => !prevState);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onKeyDown={(evt) => handleKeyDownVisibleMenu(evt)}
        onClick={() => setVisible((state) => !state)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={sortMenuClasses}>
        {Object.keys(SortFunctions).map((elem, index) => (
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

export default SortOffers;
