import axios from "axios";

export const getBuyer = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_BUYER_PENDING" });
    const result = await axios.get(`https://tikitoko.up.railway.app/v1/buyer`);

    console.log(result.data.data);
    const buyer = result.data.data;

    dispatch({ type: "GET_BUYER_SUCCESS", payload: buyer });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_BUYER_ERROR" });
  }
};

export const getBuyerDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_BUYER_DETAIL_PENDING" });

    const result = await axios.get(
      `https://tikitoko.up.railway.app/v1/buyer/${id}`
    );

    console.log(result.data.data);
    const buyer = result.data.data;

    dispatch({ type: "GET_BUYER_DETAIL_SUCCESS", payload: buyer });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_BUYER_DETAIL_ERROR" });
  }
};
