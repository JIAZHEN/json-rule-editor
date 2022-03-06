import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  return <div>{props.title}</div>;
};

Title.defaultProps = {
  title: "Json Rule Editor"
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
