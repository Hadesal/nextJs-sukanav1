import ImmobileForm from "@/components/FormComponent";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/logo.png";
import { signOut, useSession } from "next-auth/react";

export default function AddNewImmobile() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/admin/login");
  }, [router, status]);

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {status === "loading" || status === "unauthenticated" ? (
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
            <button
              className="center-btn"
              onClick={() => router.push("/admin/deleteImmobile")}
            >
              to Delete Site
            </button>
          </div>
        </>
      )}
    </>
  );
}
