import { ReactNode } from "react";
import PageInformation from "../../types/PageInformation";
import Modal from "../Modal/Modal";
import PageHeading from "../PageHeading/PageHeading";
import "./Layout.scss";

type LayoutProps = {
  children: ReactNode;
  heading?: PageInformation;
  sidebar?: (() => JSX.Element)[];
};

export const Layout = ({ children, heading, sidebar }: LayoutProps) => (
  <>
    <Modal />
    {heading && <PageHeading {...{ heading }}></PageHeading>}
    <main className="main">
      <div className="main__content">{children}</div>
      {sidebar && (
        <aside className="main__sidebar">
          {sidebar.map((Child, index) => (
            <div key={index}>
              <Child />
            </div>
          ))}
        </aside>
      )}
    </main>
  </>
);
