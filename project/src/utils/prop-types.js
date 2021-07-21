import PropTypes from 'prop-types';

export const apiRequestProp = PropTypes.shape({
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
});
