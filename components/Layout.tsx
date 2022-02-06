import Head from "next/head";
import React from "react";
import { LayoutProps } from "../interfaces/global";

const Layout: React.FC<LayoutProps> = ({ children, title, className }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <title>{title ? `${title}` : "Believers Network"}</title>
      </Head>
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;
