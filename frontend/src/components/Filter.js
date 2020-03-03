import React from "react";
import { VisibilityFilters } from "../actions/setVisibilityFilter";
import FilterLink from "../containers/FilterLink";

const Filter = () => (
  <p className="small">
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {" / "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {" / "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

export default Filter;
