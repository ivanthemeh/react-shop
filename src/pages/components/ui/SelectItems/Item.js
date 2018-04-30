import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SelectItem = ({ children, index, value, selected, className, onClick }) => (
  <li>
    <a
      className={classNames("menu-link", className, { "menu-link--selected": selected })}
      role="presentation"
      onClick={ev => onClick && onClick(index, value, children, selected)}
    >
      {children}
    </a>
  </li>
);

SelectItem.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number,
  selected: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default SelectItem;
