import { FC } from "react";
import Input from "@/components/input";

interface IFormikControlProps {
  control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
  [key: string]: any;
}

const FormikControl: FC<IFormikControlProps> = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
      //will input the remaining types of input fields later
    default:
      return null;
  }
};

export default FormikControl;
