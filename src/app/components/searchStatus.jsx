import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "Человек встретятся";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека встретятся";
    if (lastOne === 1) return "Человек встретится";
    return "Человек встретятся";
  };
  return (
    <h2>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0
          ? `${length + " " + renderPhrase(length)} с тобой сегодня!!! `
          : "Никто с тобой не встретится!!!"}
      </span>
    </h2>
  );
};

export default SearchStatus;
