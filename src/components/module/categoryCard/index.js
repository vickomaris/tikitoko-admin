import React from "react";

const CategoryCard = ({ data }) => {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          {/* <h6 className="m-0 font-weight-bold text-primary">Airline ID : {params.airlineId}</h6> */}
          <h6 className="m-0 font-weight-bold text-danger">
            Category ID : {data.category_id}
          </h6>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex flex-column my-3 col-12 justify-content-center align-items-center">
            <img
              src={data.image ? data.image : ""}
              alt="Garuda Indonesia"
              width={"300px"}
            />
            <h1>{data.name}</h1>
            {/* <h1>category a</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
