const initialState = {
  product: [],
  detail: "",
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "GET_PRODUCT_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCT_DETAIL_SUCCESS":
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };
    case "GET_PRODUCT_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "REMOVE_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "REMOVE_PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "REMOVE_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
