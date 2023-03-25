import Image from "next/image";
import React, { useEffect, useState } from "react";
const getImmobiles = async () => {
  const response = await fetch("http://localhost:3000/api/allimmobiles");
  return await response.json();
};

export default function Immobile() {
  const [allImmobile, setAllImmobile] = useState([{}]);

  useEffect(() => {
    getImmobiles().then((data) => setAllImmobile(data));
  }, []);

  return (
    <>
      <div>
        {allImmobile?.map((value, index) => (
          <div key={index}>
            {console.log(value)}
            <div>
              Images:
              {value.images?.map((value, index) => (
                <div key={index}>
                  <Image
                    src={value}
                    alt="immobile image"
                    width={250}
                    height={250}
                  />
                </div>
              ))}
            </div>
            <div>
              <p>Project Number: {value.projectNumber}</p>
            </div>
            <div>ImmobileType: {value.immobileType}</div>
            <div>details: {value.details}</div>
            <div>Completion of Build:{value.completionOfBuild}</div>
            <div>living space: {value.livingSpace}</div>
            <div>price: {value.price}</div>
            <div>location: {value.location}</div>
            <div>city: {value.city}</div>
            <div>address: {value.address}</div>
            <div>rooms: {value.rooms}</div>
            <div>zib: {value.zib}</div>
          </div>
        ))}
      </div>
    </>
  );
}
