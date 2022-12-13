import React from "react";
import airline from "../../../assets/airline.png";

const BuyerCard = ({ data }) => {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-danger">
            Buyer ID : {data.buyer_id}
            {/* Buyer ID : 123 */}
          </h6>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex mt-3 mb-2 col-12 flex-column justify-content-center align-items-center">
            <img
              src={data.avatar ? data.avatar : airline}
              alt="profile"
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 className="mt-3">
              {data.name}
              {/* Brandon */}
            </h3>
          </div>

          <div className="d-flex my-3 col-12 justify-content-around align-items-center">
            <div className="card col-5 p-0  d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-danger ">Address</h6>
              </div>
              <div className="d-flex flex-column mt-3 mx-4 justify-content-start align-items-start">
                <p>
                {data.residence ? data.residence : "-"}
                </p>
                <p>
                  {data.city ? `${data.city}, ` : ""}
                  {data.postcode ? data.postcode : ""}
                </p>
              </div>
            </div>

            <div className="card col-5 p-0  d-flex justify-content-center">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-danger ">Contact</h6>
              </div>
              <div className="d-flex flex-column mt-3 mx-4 justify-content-start align-items-start">
                <p>Email : {data.email}</p>
                {/* <p>Email : brandon@mail.com</p> */}
                <p>Phone : {data.phone ? data.phone : "-"}</p>
                {/* <p>Phone : 0123</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerCard;
