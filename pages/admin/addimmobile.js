import ImmobileForm from "@/components/FormComponent";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/logo.png";

import { getSession, signOut, useSession } from "next-auth/react";
export default function AddNewImmobile() {
  const router = useRouter();
  const { status } = useSession();
  const session = getSession();
  console.log(session.isAdmin);
  console.log(status);
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

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/admin/login");
  }, [router, status]);

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {status === "loading" ? (
        <p>......is Loading</p>
      ) : (
        <>
          <div className="add-asset-header">
            <h1 className="header-form">Create new asset</h1>
            <Image src={logo} alt="" className="logo-asset" />
          </div>
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
