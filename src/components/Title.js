import React from 'react';
import PropTypes from 'prop-types';

const Title = ({text1, text2}) => {
  return (
    <h1>
      <span className="blue">&lt;</span>
        {text1}
      <span className="blue">&gt;</span>
      <span className="yellow">{text2}</span>
    </h1>
  );
}

Title.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
};

export default Title;

