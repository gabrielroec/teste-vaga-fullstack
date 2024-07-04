"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Provider store={store}>{children}</Provider>
    </body>
  </html>
);

export default Layout;
