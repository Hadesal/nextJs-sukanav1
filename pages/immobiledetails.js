import NavBar from "@/components/Navbar";
import { getOneImmobile } from "@/utils/fechtMethods";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Immobiledetails() {
  const router = useRouter();
  const projectNumber = Object.keys(router.query).join("");
  const [immobile, setImmobile] = useState({});
  const [detailsOfImmobile, setDetailsOfImmobile] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getOneImmobile(projectNumber).then((res) => {
      if (!res.message) {
        setImmobile(res);
        setDetailsOfImmobile(res.details);
      } else {
        setErrorMessage(res.message);
      }
    });
    console.log(projectNumber);
  }, [projectNumber]);
  return (
    <>
      <NavBar />
      {!immobile ? (
        ""
      ) : (
        <div>
          <div className="test">{immobile.projectNumber}</div>
          <div>{detailsOfImmobile.size}</div>
        </div>
      )}

      <div>{errorMessage ? errorMessage : ""}</div>
    </>
  );
}
