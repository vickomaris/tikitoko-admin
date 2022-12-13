import axios from "axios";
import swal from "sweetalert";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PRODUCT_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/product`
    );

    console.log(result.data.data);
    const product = result.data.data;

    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: product });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_PRODUCT_ERROR" });
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PRODUCT_DETAIL_PENDING" });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/product/${id}`
    );

    console.log(result.data.data);
    const product = result.data.data;

    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: product });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_PRODUCT_DETAIL_ERROR" });
  }
};

export const removeProduct = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REMOVE_PRODUCT_PENDING" });

    swal({
      title: "Remove",
      text: `Are you sure want to remove this product?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        await axios.delete(
          `${process.env.REACT_APP_API_BACKEND}/product/${id}`
        );

        swal({
          title: "Removed!",
          text: `Product removed`,
          icon: "success",
        });

        navigate("/product");
      }
    });

    dispatch({ type: "REMOVE_PRODUCT_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "REMOVE_PRODUCT_ERROR" });
  }
};
