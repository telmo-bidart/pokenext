import Head from "next/head";
import React, { Children } from "react";

interface LayoutProps {
  title: string;
  children: any;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="bg-red-700">
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}
