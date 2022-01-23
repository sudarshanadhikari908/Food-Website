import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fname: yup.string().required("First Name required"),
  lname: yup.string().required("Last Name is required"),
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  username: yup.string().required(),

  password: yup.string().min(4).required("Password is required"),
  confirmpassword: yup.string().oneOf([yup.ref("password"), null]),
  mobile_number: yup.string().max(10).min(10).required("Mobile number is required"),
});


export const loginSchema = yup.object().shape({
 
  username: yup.string().email("It is not a valid username").required("Please enter your username"),
  password: yup.string().required("Please enter your password").min(6),
 
});

export const forgetPasswordSchema = yup.object().shape({
 
  email: yup.string().email("It is not a valid email").required("Please enter your email"),
 
 
});
