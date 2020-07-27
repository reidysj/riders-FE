import React, { useEffect } from "react";
import { getPendingUsers } from "../actions/usersActions";
import { connect } from "react-redux";
import PendingUsers from "./PendingUsers";

const AdminDash = ({ getPendingUsers, pendingUsers }) => {

  useEffect(() => {
    getPendingUsers();
  }, [getPendingUsers]);

  if (pendingUsers.length) {
    return (
      <div>
        <PendingUsers users={pendingUsers} />
      </div>
    );
  } else {
      return (
          <p>No Pending Users</p>
      )
  }
};

const mStP = (state) => {
  return {
    isFetching: state.isFetching,
    pendingUsers: state.pendingUsers,
  };
};

export default connect(mStP, { getPendingUsers })(AdminDash);
