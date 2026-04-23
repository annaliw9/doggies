import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, onPageChange, range }) => {
  return (
    <div className="pagination">
      {range.map((item, index) => {
        if (item === "...") {
          return (
            <span key={index} className="dots">
              ...
            </span>
          );
        }

        return (
          <button
            key={index}
            onClick={() => onPageChange(item)}
            className={currentPage === item ? "active-page" : ""}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
