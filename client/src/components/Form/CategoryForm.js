import React from "react";

const CategoryForm = ({handleSubmit,value,setValue}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter new Category"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
