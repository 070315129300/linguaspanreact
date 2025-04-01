import React, { FC } from "react";

interface TextErrorProps {
  children: React.ReactNode;
}

const TextError: FC<TextErrorProps> = (props) => {
  return <div className="text-red-600 text-sm !mt-2">{props.children}</div>;
};

export default TextError;
