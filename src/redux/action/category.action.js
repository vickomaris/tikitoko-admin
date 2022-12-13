import axios from "axios";
import swal from "sweetalert";

export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_CATEGORY_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/category`
    );

    console.log(result.data.data);
    const category = result.data.data;

    dispatch({ type: "GET_CATEGORY_SUCCESS", payload: category });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_CATEGORY_ERROR" });
  }
};

export const getCategoryDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_CATEGORY_DETAIL_PENDING" });

    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/category/${id}`
    );

    console.log(result.data.data);
    const category = result.data.data;

    dispatch({ type: "GET_CATEGORY_DETAIL_SUCCESS", payload: category });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_CATEGORY_DETAIL_ERROR" });
  }
};

export const addCategory = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_CATEGORY_PENDING" });

    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/category`,
      data
    );

    swal({
      title: "category Registered!",
      text: `${result.data.message}`,
      icon: "success",
    });

    dispatch({ type: "ADD_CATEGORY_SUCCESS" });
    navigate("/category");
  } catch (error) {
    console.log(error);
    dispatch({ type: "ADD_CATEGORY_ERROR" });
  }
};

export const updatecategory = (id, data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_CATEGORY_PENDING" });

    const result = await axios.put(
      `${process.env.REACT_APP_API_BACKEND}/category/${id}`,
      data
    );

    swal({
      title: "category Updated!",
      text: `${result.data.message}`,
      icon: "success",
    });

    dispatch({ type: "UPDATE_CATEGORY_SUCCESS" });
    navigate("/category");
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_CATEGORY_ERROR" });
  }
};
