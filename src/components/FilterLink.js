import React, { PropTypes } from "react";
import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={"/" + (filter === "all" ? "" : filter)}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(["all", "completed", "active"]).isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
