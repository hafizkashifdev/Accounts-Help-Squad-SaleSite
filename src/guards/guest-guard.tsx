"use client";

import Loading from "@root/app/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GuestGuard = ({ children }: any) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authToken");

    if (isAuthenticated) {
      router.push("/under-construction");
      return;
    }

    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return <>{children}</>;
};

export default GuestGuard;
