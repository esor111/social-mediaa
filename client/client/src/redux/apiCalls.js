import { loginfaliure, loginStart, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductfaliure,
} from "./productRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginfaliure());
  }
};

//THIS IS FOR PRODUCT


