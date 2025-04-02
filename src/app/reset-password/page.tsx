"use client";

import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import FormikControl from "@/core/common/formik/formikControl";
import Button from "@/components/button";
import TextError from "@/components/textError";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as Yup from "yup";
import useAuthStore from "@/core/data/zustand/authStates";
import axiosInstance from "@/core/api/axiosInstance";
import { useMutation } from "react-query";
import { AuthService } from "@/core/api/endpoints/authEndPoints";
import { LoginType, ResetPasswordType, SignUpType } from "@/types/authTypes";
import Image from "next/image";
import Select from "react-select";
import useStateStore from "@/core/data/zustand/utilStates";
import ForgotPasswordModalII from "@/components/modal/modalReusables/forgotPasswordModal";
import ForgotPasswordModal from "@/components/modal/modalReusables/forgotPasswordModal";

const ResetPassword = () => {
  const {} = useAuthStore();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [tab, setTab] = useState("login");

  const { isForgotPasswordModal, setIsForgotPasswordModal } = useStateStore();

  const initialValues = {
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Please create your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref('password')], "Passwords must match"),
  });


  const mutation = useMutation(
    async (values: ResetPasswordType) => {
      return AuthService.resetPassword(values);
    },
    {
      onSuccess: (data) => {
        console.log("Login successful", data);
        router.push("/");
        // Handle successful login (e.g., save token, redirect)
      },
      onError: (error: any) => {
        console.error("Login failed", error);
        setErrorMessage(
          error.response?.data?.message ?? "An unexpected error occured"
        );
      },
    }
  );

  return (
    <div className="bg-[#FBFBFB]">
      <div className="flex flex-col justify-center h-screen gap-4 md:bg-hero md:bg-cover md:bg-no-repeat">
        <div className="   md:bg-white z-10 lg:mx-[200px] mx-4 md:mx-[150px] xl:mx-[490px] md:drop-shadow-2xl md:rounded-[20px] ">
          <div className="md:px-4 md:py-6">
            <div className="flex flex-col justify-center items-center">
            
              <p className="pt-3 text-xl lg:text-2xl  text-center font-bold ">
                Create new Password
              </p>
              <p className="text-[#AFAFB0] pt-2 font-light pb-2">
                Create a new password below
              </p>

              
            </div>


           
                <div className="mt-2 lg:px-3">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => mutation.mutate(values)}
                  >
                    {(formik) => {
                      return (
                        <Form className="space-y-[20px]">
                          <FormikControl
                            control="input"
                            type="password"
                            label=""
                            name="password"
                            placeholder="Password"
                            className="w-full"
                          />
                          <FormikControl
                            control="input"
                            type="password"
                            label=""
                            name="confirm_password"
                            placeholder="Confirm Password"
                            className="w-full"
                          />
                          {errorMessage && (
                            <TextError>{errorMessage}</TextError>
                          )}

                          <div className="pt-2">
                            <Button
                              className="!bg-[#00013A] text-white !text-[20px] !rounded-[30px] !py-7"
                              type="submit"
                              disable={mutation.isLoading || !formik.isValid}
                              loading={mutation.isLoading}
                            >
                              {formik.isSubmitting ? "Creating..." : "Create New Password"}
                            </Button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>

                
        

           
          </div>
     
        </div>
      </div>
      {isForgotPasswordModal && <ForgotPasswordModal />}
    </div>
  );
};

export default ResetPassword;
