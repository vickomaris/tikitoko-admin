import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../redux/action/product.action";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const removal = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="col-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-danger">
            Product ID : {data.product_id}
          </h6>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="d-flex my-3 col-12 justify-content-center align-items-center">
            <img
              src={data.image ? data.image : ""}
              alt="product"
              width={"200px"}
            />
          </div>

          <div className="d-flex flex-column mx-4 justify-content-center align-items-center text-center">
              <h5>{data.name}</h5>
              <p>"{data.description}"</p>
            </div>

          <div className="card col-11 p-0 m-0 d-flex justify-content-center">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary ">
                Product Detail
              </h6>
            </div>

            <div className="d-flex mt-3 mx-4 justify-content-start align-items-start">
              <div className="d-flex col-6">
                <div>
                  <p>Store</p>
                  <p>Condition</p>
                </div>
                <div>
                  <p> &nbsp; : &nbsp;</p>
                  <p> &nbsp; : &nbsp;</p>
                </div>
                <div>
                  <p>{data.seller_name}</p>
                  <p>{data.condition === 0 ? "Old" : "New"}</p>
                </div>
              </div>

              <div className="d-flex col-6">
                <div>
                  <p>Price</p>
                  <p>Stock</p>
                </div>
                <div>
                  <p>&nbsp; : &nbsp;</p>
                  <p>&nbsp; : &nbsp;</p>
                </div>
                <div>
                  <p>Rp {data.price}</p>
                  <p>{data.stock}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 p-0 m-0 mt-3 d-flex flex-row justify-content-center">
            <button
              className="btn btn-danger btn-icon-split col-4 d-flex justify-content-start"
              onClick={() => removal(data.product_id)}
              type="button"
            >
              <span className="icon text-white-50">
                <i className="fas fa-trash"></i>
              </span>
              <span className="text ml-2">Remove Product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
