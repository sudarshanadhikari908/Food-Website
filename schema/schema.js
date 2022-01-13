import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fname: yup.string().required("First Name required"),
  lname: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),

  password: yup.string().min(4).max(15).required(),
  confirmpassword: yup.string().oneOf([yup.ref("password"), null]),
});
