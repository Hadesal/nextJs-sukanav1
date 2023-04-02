import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { useFormik } from "formik";
import { deleteOneImmobile } from "@/utils/fechtMethods";

export default function DeleteImmobile() {
  const { status } = useSession();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleDelete = async (values) => {
    setMessage("");
    const response = await deleteOneImmobile(values.projectNumber);
    setMessage(response.message);
  };
  const formik = useFormik({
    initialValues: {
      projectNumber: "",
    },

    onSubmit: handleDelete,
  });
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
            <h1 className="header-form">Delete asset</h1>
            <Image src={logo} alt="" className="logo-asset" />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-field">
              Project Number:
              <input
                type={"number"}
                name={"projectNumber"}
                {...formik.getFieldProps("projectNumber")}
              />
            </div>
            <div>{message ? message : ""}</div>

            <button type="submit" className="btn">
              DELETE
            </button>
          </form>
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
