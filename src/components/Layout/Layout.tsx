import { PropsWithChildren, ReactNode } from "react";
import PageInformation from "../../types/PageInformation";
import PageHeading from "../PageHeading/PageHeading";
import "./Layout.scss";

type LayoutProps = {
  children: ReactNode;
  heading?: PageInformation;
  sidebar?: ReactNode[];
};

export const Layout = ({ children, heading, sidebar }: LayoutProps) => (
  <BasicLayout>
    {heading && <PageHeading {...{ heading }}></PageHeading>}
    <main>{children}</main>
    {sidebar && (
      <aside>
        {sidebar.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </aside>
    )}
  </BasicLayout>
);

export const BasicLayout = ({ children }: PropsWithChildren) => (
  <div className="snowball">{children}</div>
);
