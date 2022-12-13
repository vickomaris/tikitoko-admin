const initialState = {
    seller: [],
    detail: "",
    isLoading: false,
  };
  
  const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_SELLER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_SELLER_SUCCESS":
        return {
          ...state,
          seller: action.payload,
          isLoading: false,
        };
      case "GET_SELLER_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      case "GET_SELLER_DETAIL_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_SELLER_DETAIL_SUCCESS":
        return {
          ...state,
          detail: action.payload,
          isLoading: false,
        };
      case "GET_SELLER_DETAIL_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default sellerReducer;
  