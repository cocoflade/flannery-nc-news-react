import React from "react";

function SortButtons(props) {
  const { sorted } = props;
  return (
    <>
      <button onClick={() => sorted("comment_count")}>Sort by comments</button>
      <button onClick={() => sorted("created_at")}>Sort by date</button>
      <button onClick={() => sorted("votes")}>Sort by vote count</button>
    </>
  );
}

export default SortButtons;
