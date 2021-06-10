import PropTypes from 'prop-types';

const user = PropTypes.shape({
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  isPro: PropTypes.bool,
});

const review = PropTypes.shape({
  comment: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user,
  date: PropTypes.string,
}).isRequired;

export { review, user };
