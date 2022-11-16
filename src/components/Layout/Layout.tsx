import { PropsWithChildren, ReactNode } from "react";
import "./Layout.scss";

type LayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode[];
};

export const Layout = ({ children, sidebar }: LayoutProps) => (
  <BasicLayout>
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
