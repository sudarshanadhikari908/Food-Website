import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/schema";
import api from "../../api/api";
import { config } from "../../config/config";


const SignUp = () => {
 
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const signupRequest = async (values) => {
    try {
      const response = await api.post(
        "api/v4/auth/signup",
        {
          last_name: values.lname,
          email: values.email,
          password: values.password,
          mobile_number: parseInt(values.mobile_number),
          first_name: values.fname,
          username: values.username,
        },
        config
      );
      if (response.status === 200) {
        console.log(response.data);
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const submitForm = () => {
    const values = getValues();
    console.log(isValid);
    if (isValid) {
      alert("Your form is submitted Successfully");
      signupRequest(values);

      reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            {...register("fname")}
            placeholder="Enter your first Name"
          />
        </div>
        <p style={{ color: "red" }}> {errors.fname?.message} </p>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            {...register("lname")}
            name="lname"
          />
          <p style={{ color: "red" }}> {errors.lname?.message} </p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            {...register("email")}
            placeholder="Enter Username"
          />
          <p style={{ color: "red" }}> {errors.email?.message} </p>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter Username"
            {...register("username")}
            name="username"
          />
          <p style={{ color: "red" }}> {errors.username?.message} </p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            {...register("password")}
            
          />
          <p style={{ color: "red" }}> {errors.password?.message} </p>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmpassword"
            {...register("confirmpassword")}
            placeholder="Enter password"
          />
          <p style={{ color: "red" }}> {errors.confirmpassword?.message} </p>
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter password"
            {...register("mobile_number")}
            name="mobile_number"
          />
          <p style={{ color: "red" }}> {errors.mobile_number?.message} </p>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          <Link href="/login">
            <a>Already Have an Account?</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
