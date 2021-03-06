import { connect } from "react-redux";

import { setVisibilityFilter } from "../actions/setVisibilityFilter";
import Link from "../components/Link";

// extracts data from the store
// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.setVisibilityFilter
  };
};

// dispatches actions to the store
// sends new object to store
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
