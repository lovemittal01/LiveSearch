import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;

    setImg(data);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search Anything"
          value={img}
          onChange={inputEvent}
        ></input>
        {img === "" ? null : <Sresult name={img} />}
      </div>
    </>
  );
};

export default Search;
