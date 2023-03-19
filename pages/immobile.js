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
              <p>{value.projectNumber}</p>
            </div>
            <div>{value.immobileType}</div>
            <div>{value.details}</div>
            <div>{value.completionOfBuild}</div>
            <div>{value.livingSpace}</div>
            <div>{value.price}</div>
            <div>{value.location}</div>
            <div>{value.city}</div>
            <div>{value.address}</div>
            <div>{value.rooms}</div>
            <div>{value.zib}</div>
          </div>
        ))}
      </div>
    </>
  );
}
