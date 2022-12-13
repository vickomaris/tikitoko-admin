const initialState = {
    admin: [],
    isLoading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          admin: action.payload,
          isLoading: false,
        };
      case "LOGIN_ERROR":
        return {
          ...state,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;