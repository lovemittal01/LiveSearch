import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <h1>
        user {fname} {lname} page
      </h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === `/user/Love/mittal` ? (
        <button onClick={() => history.goBack()}>GO BACK</button>
      ) : null}
    </>
  );
};

export default User;
