import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Immobiledetails() {
  const router = useRouter();
  const immobile = router.query;
  useEffect(() => {
    console.log(immobile);
  }, [immobile]);
  return (
    <>
      <div>{immobile.city}</div>
    </>
  );
}
