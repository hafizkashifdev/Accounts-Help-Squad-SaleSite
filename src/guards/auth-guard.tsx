"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const AuthGuard = ({ children }: any) => {
  const [allow, setAllow] = useState(false);
  const router = useRouter();
  const isAuthenticated = localStorage.getItem("authToken");

  const checkSigninHandler = useCallback(() => {
    if (Boolean(isAuthenticated)) {
      setAllow(true);
    }
  }, []);

  useEffect(() => {
    checkSigninHandler();
    router.push("/under-construction");
  }, []);

  if (allow) return null;

  return <>{children}</>;
};

export default AuthGuard;
