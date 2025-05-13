// components/Layout.tsx
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
