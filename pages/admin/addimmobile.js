import ImmobileForm from "@/components/FormComponent";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function AddNewImmobile() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (router.asPath !== url) {
        window.history.pushState(null, null, router.asPath);
      }
    };
    window.history.pushState(null, null, router.asPath);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router.asPath]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.replace({ pathname: "/admin/login" });
  };

  return (
    <>
      <div>
        <ImmobileForm />
      </div>
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
    </>
  );
}
