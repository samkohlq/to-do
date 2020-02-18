import { SET_VISIBILITY_FILTER, VisibilityFilters } from "../actions";

const { SHOW_ALL } = VisibilityFilters;

// initialises state to be the "SHOW_ALL" string
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
