import { ReactNode } from "react";
import PageInformation from "../../types/PageInformation";
import PageHeading from "../PageHeading/PageHeading";
import "./Layout.scss";

type LayoutProps = {
  children: ReactNode;
  heading?: PageInformation;
  sidebar?: (() => JSX.Element)[];
};

export const Layout = ({ children, heading, sidebar }: LayoutProps) => (
  <>
    {heading && <PageHeading {...{ heading }}></PageHeading>}
    <main className="main__content">{children}</main>
    {sidebar && (
      <aside className="main__sidebar">
        {sidebar.map((Child, index) => (
          <div key={index}>
            <Child />
          </div>
        ))}
      </aside>
    )}
  </>
);
