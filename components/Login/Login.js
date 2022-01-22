import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../api/api";
import { config } from "../../config/config";



const Login = ()=>{
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors, isValid },
      } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(loginSchema),
      });





const loginRequest = async (values) => {
    try {
      const response = await api.post(
        "api/v4/auth/login",
        {
         
          email: values.email,
          password: values.password,
         
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

const submitForm = (data) => {
    const values = getValues();
    console.log(isValid);
    if (isValid) {
      alert("Your form is submitted Successfully");
      loginRequest(values);

      reset();
    }
}

    
return(
    <div>
         <form onSubmit={handleSubmit(submitForm)}>
             <h3>Login</h3>
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
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            {...register("password")}
            name="password"
          />
          <p style={{ color: "red" }}> {errors.password?.message} </p>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Log In
        </button>
        <p className="forgot-password text-right">
          <Link href="/register">
            <a>Donot Have an Account?</a>
          </Link>
        </p>


        </form>
    </div>

);
};
  


export default Login;