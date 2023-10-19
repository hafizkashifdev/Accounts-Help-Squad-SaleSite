"use client";

import store from "@root/redux/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
// import AuthGuard from "@root/guards/auth-guard";

export default function Layout({ children }: any) {
  return (
    <Provider {...{ store }}>
      {/* <AuthGuard> */}
        <SnackbarProvider
          anchorOrigin={{
            horizontal: "center",
            vertical: "top",
          }}
        >
          {children}
        </SnackbarProvider>
      {/* </AuthGuard> */}
    </Provider>
  );
}
