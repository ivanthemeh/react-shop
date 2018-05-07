import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AutocompleteField from "../ui/Form/Field/Autocomplete";
import api from "../../../modules/api";

const Header = params => (
  <div className="main__header">
    <div className="resp-content">
      <Link to="/">
        <span className="logo" />
      </Link>
      <AutocompleteField
        asyncRequest={q => api.mainSearch(q)}
        onSelect={(value, el) => {
          console.log(value);
        }}
        inputProps={{ placeholder: "What are you looking for? (jeans or shirt)" }}
        className="search-bar"
        listHeight="300px"
      />
      <div className="buttons">
        <button className="icon icon-person_outline" />
        <button className="icon icon-favorite_border" />
        <button className="icon icon-shopping_basket" />
      </div>
    </div>
  </div>
);

Header.propTypes = {};

export default Header;
