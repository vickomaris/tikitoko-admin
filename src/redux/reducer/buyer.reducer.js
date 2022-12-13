const initialState = {
    buyer: [],
    detail: "",
    isLoading: false,
  };
  
  const buyerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_BUYER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_BUYER_SUCCESS":
        return {
          ...state,
          buyer: action.payload,
          isLoading: false,
        };
      case "GET_BUYER_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      case "GET_BUYER_DETAIL_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_BUYER_DETAIL_SUCCESS":
        return {
          ...state,
          detail: action.payload,
          isLoading: false,
        };
      case "GET_BUYER_DETAIL_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default buyerReducer;
  