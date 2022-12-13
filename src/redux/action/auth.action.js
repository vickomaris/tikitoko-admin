import axios from "axios";
import swal from "sweetalert";

export const login = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/auth/login`,
      dataForm
    );

    console.log(result.data.data);
    const admin = result.data.data;

    swal({
      title: "Logged In",
      text: `Welcome ${admin.data.username}`,
      icon: "success",
    });

    localStorage.setItem("token", admin.token);
    localStorage.setItem("user", JSON.stringify(admin.data));

    dispatch({ type: "LOGIN_SUCCESS", payload: admin });
    navigate("/");
  } catch (error) {
    swal({
      title: "Invalid",
      text: `E-mail or Password invalid`,
      icon: "error",
    });
    console.log(error);
    dispatch({ type: "LOGIN_ERROR" });
  }
};
