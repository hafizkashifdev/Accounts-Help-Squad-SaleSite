"use client";

import store from "@root/redux/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

export default function Layout({ children }: any) {
  return (
    <Provider {...{ store }}>
      <SnackbarProvider
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        {children}
      </SnackbarProvider>
    </Provider>
  );
}
