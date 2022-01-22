import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fname: yup.string().required("First Name required"),
  lname: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),

  password: yup.string().min(4).max(15).required(),
  confirmpassword: yup.string().oneOf([yup.ref("password"), null]),
  mobile_number: yup.string().max(10).min(10)
});


export const loginSchema = yup.object().shape({
 
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(4).max(15).required("Please enter your password"),
 
});
