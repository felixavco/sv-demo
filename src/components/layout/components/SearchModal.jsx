import React from "react";
import { Sidebar } from "primereact/sidebar";
import { connect } from "react-redux";
import { changeSeachModalState } from "../../../redux/actions/layout.actions";

const SearchModal = ({ changeSeachModalState, searchModalState }) => {
  return (
    <Sidebar
      visible={searchModalState}
      onHide={() => changeSeachModalState(false)}
      fullScreen={true}
    >
      <div className="container">
        <h1 className="text-center display-1">SEARCH....</h1>
      </div>
    </Sidebar>
  );
};

const mapStateToProps = state => ({
  searchModalState: state.layout.searchModalState
});

export default connect(
  mapStateToProps,
  { changeSeachModalState }
)(SearchModal);
