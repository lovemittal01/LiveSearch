import React, { useState } from "react";

const Sresult = (props) => {
  const img = `https://api.unsplash.com/400x300/?${props.name}`;

  return (
    <>
      <div>
        <img src="img" alt="Search" />
      </div>
    </>
  );
};

export default Sresult;
