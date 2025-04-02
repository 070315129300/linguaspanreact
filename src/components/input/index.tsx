import React, { useState } from "react";
import { classes } from "@/core/common/utils";
import { ErrorMessage, Field } from "formik";
import TextError from "../textError";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface InputProps {
  value?: any;
  type?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  accept?: string;
  className?: string;
  containerClassName?: string;
  label?: string;
  info?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  disabled?: boolean;
  required?: boolean;
  max?: string | number | undefined;
  min?: string | number | undefined;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  id,
  onChange,
  placeholder,
  name = "",
  accept,
  label,
  className = "",
  containerClassName = "",
  info,
  defaultValue,
  disabled = false,
  required,
  max,
  min,
}) => {
  const [inputType, setInputType] = useState("password");
  const handleClick = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };
  return (
    <>
      <div className="flex flex-col space-y-1">
        {label && (
          <label
            htmlFor={name}
            className={classes(
              "text-[#202c4b] text-sm font-medium px-1 pointer-events-none, max-w-[75%] pb-1"
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <Field
            disabled={disabled}
            className={classes(
              "form__input w-full py-[2px] px-4 rounded-lg text-sm placeholder:text-sm placeholder:font-light placeholder:text-[#AFAFB0] text-black bg-placeholder border-[0.7px] border-[#DADADA] focus:outline-none  relative font-normal min-h-[51px] focus:shadow-[0_0_3px_#E6ECF7] max-h-[51px] pr-[42px] disabled:cursor-not-allowed",
              className
            )}
            type={type === "password" ? inputType : type}
            id={name}
            required={required}
            autoComplete="on"
            name={name}
            placeholder={placeholder}
            // value={value}
            // onChange={onChange}
            defaultValue={defaultValue}
            accept={accept}
            max={max}
            min={min}
          />
          {type === "password" && (
            <div
              onClick={() => handleClick()}
              className="absolute right-2 top-[17px] h-6 w-6 "
            >
              {inputType === "password" ? (
                <FaEyeSlash className="font-black text-[#AFAFB0] text-base" />
              ) : (
                <FaEye className="font-black text-[#AFAFB0] text-base" />
              )}
            </div>
          )}
        </div>
      </div>
      <ErrorMessage
        name={name}
        children={(msg) => <TextError children={msg} />}
      />
    </>
  );
};

export default Input;
