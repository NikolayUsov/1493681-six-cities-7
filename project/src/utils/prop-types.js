import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const apiRequestProp = PropTypes.shape({
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
});
