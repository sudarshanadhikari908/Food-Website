import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { config } from "@/config/config";
import api from "@/api/api";
import { useRouter } from "next/router";
import { forgetPasswordSchema } from "@/schema/schema";
import IChangePassword from '@/interface/changePassword';




function ChangePassword() {

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<IChangePassword>({
    mode: "onChange",
    resolver: yupResolver(forgetPasswordSchema),
  });

  const passwordChangeRequest =async (values:IChangePassword)=>{
    try {
      const response = await api.post(
        '/api/v4/profile/change-password',
        // {
        //   old-password : values.oldpassword,
        //   new-password : values.newpassword,
        //   confirm-password : values.confirmpassword
        // },
     
      );
    }catch(e){
      console.log("Hellos")
    }}



  const submitForm = () => {
    const values = getValues();
    console.log(isValid);
    if (isValid) {
      alert("Your form is submitted Successfully");
      passwordChangeRequest(values);

      reset();
    }
  }

  return(  
    <div className="row h-100 justify-content-center align-items-center">
      <form className=' justify-content-md-center col-md-5' onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label>Old Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter old password"
            {...register("oldpassword")}
            name="oldpassword"
            
          />
          <p style={{ color: "red" }}> {errors.oldpassword?.message} </p>
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            {...register("newpassword")}
            name="newpassword"
            
          />
          <p style={{ color: "red" }}> {errors.newpassword?.message} </p>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirms password"
            {...register("confirmpassword")}
            name="confirmpassword"
            
          />
          <p style={{ color: "red" }}> {errors.confirmpassword?.message} </p>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
