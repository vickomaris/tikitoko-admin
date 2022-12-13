const initialState = {
  category: [],
  detail: "",
  isLoading: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_CATEGORY_SUCCESS":
      return {
        ...state,
        category: action.payload,
        isLoading: false,
      };
    case "GET_CATEGORY_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "GET_CATEGORY_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_CATEGORY_DETAIL_SUCCESS":
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };
    case "GET_CATEGORY_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    case "ADD_CATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "ADD_CATEGORY_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
