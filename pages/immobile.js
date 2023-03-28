import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getImmobile } from "@/utils/fechtMethods";
import ImageToBase64 from "@/components/ImageConverter";

export default function Immobile() {
  const [allImmobile, setAllImmobile] = useState([{}]);

  useEffect(() => {
    getImmobile().then((data) => setAllImmobile(data));
  }, []);

  return (
    <>
      <ImageToBase64 />
    </>
  );
}
