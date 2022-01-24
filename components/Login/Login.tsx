import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "@/api/api";
import { config } from "@/config/config";
import cookie from "js-cookie";
import LoginGoogle from "./LoginGoogle";
import ILogin from '@/interface/login';
import { toast } from 'react-toastify';




const Login = ()=>{

 

  let tokenKey;
  const preLoadedValues = {
    username: cookie.get('username'),
    password: cookie.get('password')
  }

  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<ILogin>({
    defaultValues: preLoadedValues,
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });





  const loginRequest = async (values:ILogin) => {

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
      console.log(response.status)
      if (response.status === 200) {
   
        
        if (values.rememberme){
          cookie.set('username', values.username, { path: '/login' })
          cookie.set('password', values.password, { path: '/login' })
        }

        console.log(response.data.access_token);
        
        tokenKey = response.data.access_token
        cookie.set('token', tokenKey, { path: '/' });
        toast.success("Login Successful")
        router.push("/");
      }
      console.log(values.rememberme)
   
    } catch (e:any) {

      console.log(e.response.data.errors[0].message)
  
      const message = e.response.data.errors[0].message

      if(message){
          
        console.log(message)
        toast.error(message)
      }else{
        console.log("Bad Request")
        toast.error("Internal Server Error")
      }
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
    <div className="row h-100 justify-content-center align-items-center">
      <form className=' justify-content-md-center col-md-5' onSubmit={handleSubmit(submitForm)}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            {...register("username")}
            name="username"
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
            {...register("password")}
            name="password"
            
          />
          <p style={{ color: "red" }}> {errors.password?.message} </p>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox"   {...register("rememberme")} name="rememberme"/>
          <label className="form-check-label" >
            Remember Me
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Log In
        </button>
        
        <LoginGoogle/>
        <p className="push-register">
          <Link href="/login/forgot-password">
            <a>Forgot Password?</a>
          </Link>
        </p>

        <p className="push-register">
          <Link href="/register">
            <a>Donot Have an Account?</a>
          </Link>
        </p>

      



      </form>
    </div>

  );
};
  


export default Login;