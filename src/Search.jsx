import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div style={{ margin: "0px 4%" }}>
        <div
          className="headline_div"
          style={{ width: "34%", margin: "0px 33%" }}
        >
          <h1>Latest News in Short</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search Here.."
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
