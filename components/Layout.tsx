import React from "react";
import Header from "./Header";
import { ReactNode } from "react";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
