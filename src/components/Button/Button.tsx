import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import setClass from "../../services/setClass/setClass";
import "./Button.scss";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  to?: string;
}

const Button = ({ children, to, ...rest }: ButtonProps) => {
  const props = {
    ...rest,
    className: setClass("button", rest.className),
  };

  return (
    <>
      {!to && <button {...props}>{children}</button>}
      {to && (
        <Link {...props} to={to}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
