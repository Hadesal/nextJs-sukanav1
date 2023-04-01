import ImmobileForm from "@/components/FormComponent";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/logo.png"


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
    router.replace({ pathname: "/admin/login" });
  };

  return (
    <>
    <div className="add-asset-header">
    <h1 className="header-form">Create new asset</h1>
    <Image src={logo} alt="" className="logo-asset" />
    </div>
      <div>
        <ImmobileForm />
      </div>
      <div className="center-btn">
        <button onClick={handleLogout} className="logout">logout</button>
      </div>
    </>
  );
}
