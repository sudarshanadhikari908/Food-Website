import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { config } from "@/config/config";
import api from "@/api/api";
import { useRouter } from "next/router";
import { forgetPasswordSchema } from "@/schema/schema";
import IForget from "@/interface/forgetPassword";
import { toast } from "react-toastify";

function ForgetPassword() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<IForget>({
    mode: "onChange",
    resolver: yupResolver(forgetPasswordSchema),
  });

  const passwordChangeRequest = async (values: IForget) => {
    try {
      const response = await api.post(
        "api/v4/auth/forgot-password",
        {
          email: values.email,
        },
        config
      );

      if (response.status === 200) {
        router.push("/login/change-password");
      }
    } catch (e: any) {
      const message = e.response.data.errors[0].message;

      if (message) {
        toast.error(message);
      } else {
        toast.error("Bad request");
      }
    }
  };

  const submitForm = () => {
    const values = getValues();

    if (isValid) {
      alert("Your form is submitted Successfully");
      passwordChangeRequest(values);
      reset();
    }
  };

  return (
    <div className="row h-100 justify-content-center align-items-center">
      <form className="col-md-5" onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email")}
            name="email"
            placeholder="Enter Username"
          />
          <p style={{ color: "red" }}> {errors.email?.message} </p>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
