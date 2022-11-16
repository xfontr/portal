import { HTMLAttributes, ReactNode } from "react";
import setClass from "../../services/setClass/setClass";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  const props = {
    ...rest,
    className: setClass("button", rest.className),
  };

  return <button {...props}>{children}</button>;
};

export default Button;
