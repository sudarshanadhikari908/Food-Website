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
          client_id: 2,
          client_secret: "ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo",
          grant_type: "password",
         
          username: values.username,
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

  const submitForm = () => {
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
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            {...register("username")}
            placeholder="Enter Username"
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