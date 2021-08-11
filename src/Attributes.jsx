import React from 'react';
import PropTypes from 'prop-types';

class Attributes extends React.Component {
  render() {
    const { key, name, valueName } = this.props;

    return (
      <div key={ key }>
        <span>
          { name }
          :
        </span>
        <span>
          {' '}
          { valueName }
        </span>
      </div>
    );
  }
}

Attributes.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default Attributes;
