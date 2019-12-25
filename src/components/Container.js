import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div>{children}</div>;
}

Container.propTypes = {
  flex: PropTypes.bool,
  justify: PropTypes.oneOf(['center', 'start', 'end'])
};

export default Container;
