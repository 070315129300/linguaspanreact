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
import { LoginType, SignUpType } from "@/types/authTypes";
import Image from "next/image";
import Select from "react-select";
import ForgotPasswordModal from "@/components/modal/modalReusables/forgotPasswordModal";
import useStateStore from "@/core/data/zustand/utilStates";

const ageRanges = [
  { value: "0-12", label: "0 - 12" },
  { value: "13-17", label: "13 - 17" },
  { value: "18-24", label: "18 - 24" },
  { value: "25-34", label: "25 - 34" },
  { value: "35-44", label: "35 - 44" },
  { value: "45-54", label: "45 - 54" },
  { value: "55-64", label: "55 - 64" },
  { value: "65+", label: "65+" },
];

const SignUp = () => {
  const {} = useAuthStore();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [tab, setTab] = useState("sign-up");
  const {isForgotPasswordModal, setIsForgotPasswordModal} = useStateStore();

  const initialValues = {
    email: "",
    password: "",
    // rememberMe: false,  Initialize rememberMe field to false (unchecked) by default
  };

  const initialValuesII = {
    email: "",
    password: "",
    username: "",
    ageBracket: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    // /^.{8,}$/,
    // "Must Contain at least 8 characters"
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
    // "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
  });

  const validationSchemaII = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string()
      .required("Please create your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    username: Yup.string().required("Required"),
    ageBracket: Yup.string().required("Required"),
  });

  const mutation = useMutation(
    async (values: LoginType) => {
      return AuthService.login(values);
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
  const mutationII = useMutation(
    async (values: SignUpType) => {
      return AuthService.login(values);
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
              <div className="flex justify-center">
                <Image
                  src="/images/Linguaspan-authLogo.svg"
                  alt=""
                  className={` w-auto h-[67px] `}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <p className="pt-3 text-xl lg:text-2xl  text-center font-bold ">
                Hola! Welcome
              </p>
              <p className="text-[#AFAFB0] pt-2 font-light">
                Join us to save the voices of mother earth
              </p>

              <div className="my-4 text-base bg-[#f2f1f5] py-1 px-2 w-full flex justify-between rounded-[30px]">
                <button
                  type="button"
                  className={`p-[10px] rounded-[30px] w-[50%] ${
                    tab === "login"
                      ? " bg-[#00013A] text-white"
                      : "text-[#4f4f4f]"
                  }`}
                  onClick={() => setTab("login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className={`p-[10px] rounded-[30px] w-[50%] ${
                    tab === "sign-up"
                      ? "bg-[#00013A] text-white"
                      : "text-[#4f4f4f]"
                  }`}
                  onClick={() => setTab("sign-up")}
                >
                  Sign up
                </button>
              </div>
            </div>

            {/* login */}
            {tab === "login" && (
              <>
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
                            type="email"
                            label=""
                            name="email"
                            placeholder="Email Address"
                            className="w-full"
                          />
                          <FormikControl
                            control="input"
                            type="password"
                            label=""
                            name="password"
                            placeholder="Password"
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
                              {formik.isSubmitting ? "Logging in..." : "Login"}
                            </Button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>

                <div className="flex justify-center pt-4">
                  <p
                    onClick={() => {
                      //   setIsModalVisible(false), setIsForgotPasswordVisible(true);
                    }}
                    className="pt-4 text-[#4F4F4F] font-light text-base"
                  >
                    Forgot password?{" "}
                    <span className="text-[#00013A] cursor-pointer" onClick={() => setIsForgotPasswordModal(true)}>
                      Reset
                    </span>{" "}
                    Here
                  </p>
                </div>
              </>
            )}

            {/* sign up */}
            {tab === "sign-up" && (
              <div className="mt-2 lg:px-3">
                <Formik
                  initialValues={initialValuesII}
                  validationSchema={validationSchemaII}
                  validateOnBlur={true}
                  onSubmit={(values) => mutationII.mutate(values)}
                >
                  {(formik) => {
                    return (
                      <Form className="space-y-[20px]">
                        <FormikControl
                          control="input"
                          type="email"
                          label=""
                          name="email"
                          placeholder="Email Address"
                          className="w-full"
                        />
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="username"
                          placeholder="Username"
                          className="w-full"
                        />
                        <Select
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                          options={ageRanges}
                          onChange={(option) =>
                            formik.setFieldValue(
                              "ageBracket",
                              option?.value || ""
                            )
                          }
                          value={ageRanges.find(
                            (option) =>
                              option.value === formik.values.ageBracket
                          )}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              border: "0.7px solid #DADADA", // Remove the border
                              "&:hover": {
                                border: "0.7px solid #DADADA", // Maintain white border on hover
                              },
                              height: "51px",
                              // boxShadow:
                              //   "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                              borderRadius: "8px",
                              boxShadow: "none", // Remove the default focus border
                              width: "inherit",
                            }),
                            // Optional: Customize other parts (e.g., removing border on focus or hover)
                            menu: (baseStyles) => ({
                              ...baseStyles,
                              border: "none",
                              marginTop: "0px",
                              color: "#00013A",
                              width: "100%",
                            }),
                            placeholder: (baseStyles) => ({
                              ...baseStyles,
                              border: "none", // Remove the border around the placeholder if any
                              color: "#AFAFB0",
                              fontSize: "14px",
                              fontWeight: "300",
                            }),
                            option: (baseStyles, { isFocused }) => ({
                              ...baseStyles,
                              backgroundColor: isFocused ? "#00013A" : "white", // Orange background on hover
                              color: isFocused ? "white" : "black", // Change text color on hover
                              "&:hover": {
                                backgroundColor: "#00013A", // Darker orange when hovering
                                color: "white",
                              },
                            }),
                          }}
                          placeholder="Age Bracket"
                        />
                        {formik.errors.ageBracket &&
                          formik.touched.ageBracket && (
                            <TextError>{formik.errors.ageBracket}</TextError>
                          )}
                        <FormikControl
                          control="input"
                          type="password"
                          label=""
                          name="password"
                          placeholder="Create Password"
                          className="w-full"
                        />
                        {errorMessage && <TextError>{errorMessage}</TextError>}

                        <div className="pt-2">
                          <Button
                            className="!bg-[#00013A] text-white !text-[20px] !rounded-[30px] !py-7"
                            type="submit"
                            disable={mutation.isLoading || !formik.isValid}
                            loading={mutation.isLoading}
                          >
                            {formik.isSubmitting ? "Sign up" : "Sign up"}
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            )}
          </div>
          {/* <h3 className="text-xl lg:text-2xl  text-center uppercase font-bold tracking-wider ">
          Login
        </h3> */}
        </div>
      </div>
      {
        isForgotPasswordModal ? <ForgotPasswordModal/> : ""
      }
    </div>
  );
};

export default SignUp;
