import React from "react";
import Header from "./Header";
import { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
