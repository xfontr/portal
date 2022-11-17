import { ReactNode } from "react";
import PageInformation from "../../types/PageInformation";
import PageHeading from "../PageHeading/PageHeading";
import "./Layout.scss";

type LayoutProps = {
  children: ReactNode;
  heading?: PageInformation;
  sidebar?: ReactNode[];
};

export const Layout = ({ children, heading, sidebar }: LayoutProps) => (
  <>
    {heading && <PageHeading {...{ heading }}></PageHeading>}
    <main className="main__content">{children}</main>
    {sidebar && (
      <aside className="main__sidebar">
        {sidebar.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </aside>
    )}
  </>
);
