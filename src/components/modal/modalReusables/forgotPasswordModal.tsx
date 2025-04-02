"use client";

import React from "react";
import Modal from "..";
import { Form, Formik, ErrorMessage } from "formik";
import FormikControl from "@/core/common/formik/formikControl";
import Button from "@/components/button";
import TextError from "@/components/textError";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as Yup from "yup";
import { AuthService } from "@/core/api/endpoints/authEndPoints";
import useStateStore from "@/core/data/zustand/utilStates";
import { useMutation } from "react-query";
import { ForgotPasswordType } from "@/types/authTypes";
import Image from "next/image";

const ForgotPasswordModal = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); //useState to track if a user has done  forgotPassword after the api call was successful in order to render the forgotPassword success message

  const { isForgotPasswordModal, setIsForgotPasswordModal } = useStateStore();
  const router = useRouter();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const mutation = useMutation(
    async (values: ForgotPasswordType) => {
      return AuthService.forgotPassword(values);
    },
    {
      onSuccess: (data) => {
        console.log("Login successful", data);
        setIsForgotPassword(true);

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
    <Modal
      isVisible={isForgotPasswordModal}
      onClose={() => setIsForgotPasswordModal(false)}
      customStyles={{
        overflowY: "scroll",
        height: "fit-content",
        width: "100%",
        maxWidth: "400px",
        borderRadius: "20px"
      }}
    >
      <h3
        className={`${
          isForgotPassword && "hidden"
        } mt-5 mt-4 text-2xl text-center font-semibold`}
      >
        Forgot your password?
      </h3>
      <div className={`${isForgotPassword && "hidden"} mt-5`}>
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

                {errorMessage && <TextError>{errorMessage}</TextError>}

                <div className="pt-[10px]">
                  <Button
                    className="!bg-[#00013A] !rounded-[30px] text-white !mt-[30px]"
                    type="submit"
                    disable={mutation.isLoading || !formik.isValid}
                    loading={mutation.isLoading}
                  >
                    {formik.isSubmitting ? "Continue..." : "Continue"}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>

      <div className={`py-4 px-2 ${isForgotPassword ? "flex flex-col justify-center items-center gap-y-3" : "hidden"}`}>
        <p className="text-center text-xl font-bold px-3">A Password reset link has been sent to your mail</p>
        <p className="text-[#AFAFB0]">Kindly use the link to reset your password</p>
        <div className="py-4">
          <Image
            src="/icons/message-notif.svg"
            alt=""
            className={` w-auto h-[67px]`}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="pt-2 w-full">
          <Button
            className="!bg-[#00013A] !min-w-full text-white !text-[20px] !rounded-[30px] !py-7"
            type="button"
            
          >
            Check Mail
          </Button>
        </div>

      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
