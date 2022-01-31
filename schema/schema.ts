import * as yup from "yup";

// Validation for user registration
export const registerSchema = yup.object().shape({
  fname: yup.string().required("First Name required"),
  lname: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  username: yup.string().required("Username is required"),

  password: yup.string().min(4).required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password didn't match"),
  mobile_number: yup
    .string()
    .max(10)
    .min(10)
    .required("Mobile number is required"),
});

// Validation while user tries to log in into the system

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("It is not a valid username")
    .required("Please enter your username"),
  password: yup.string().required("Please enter your password").min(6),
});

// Validation if user forgets password

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("It is not a valid email")
    .required("Please enter your email"),
});
