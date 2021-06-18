import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const user = PropTypes.shape({
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  isPro: PropTypes.bool,
});

const ReviewItemProp = PropTypes.shape({
  comment: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user,
  date: PropTypes.instanceOf(dayjs),
}).isRequired;

export { ReviewItemProp, user };
