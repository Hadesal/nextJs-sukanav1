import ImmobileForm from "@/components/FormComponent";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, signOut, useSession } from "next-auth/react";
export default function AddNewImmobile() {
  const router = useRouter();
  const { status } = useSession();
  const session = getSession();
  console.log(session.isAdmin);
  useEffect(() => {
    if (status === "unauthenticated") router.replace("/admin/login");
  }, [router, status]);

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
    router.replace({ pathname: "/admin/login" });
    signOut();
  };

  return (
    <>
      {status === "loading" ? (
        <p>......is Loading</p>
      ) : (
        <>
          <h1 className="header-form">Create new asset</h1>
          <div>
            <ImmobileForm />
          </div>
          <div className="center-btn">
            <button onClick={handleLogout} className="logout">
              logout
            </button>
          </div>
        </>
      )}
    </>
  );
}
