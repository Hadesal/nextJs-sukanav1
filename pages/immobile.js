import React, { useMemo, useContext } from "react";
import ImageSlider from "@/components/ImageSilider";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilBedDouble } from "@iconscout/react-unicons";
import { UilBath } from "@iconscout/react-unicons";
import { UilArrowResizeDiagonal } from "@iconscout/react-unicons";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import { ImmobileContext } from "@/contexts/ImmobileContext";

export default function Immobile() {
  const { allImmobile } = useContext(ImmobileContext);

  const memorizedImmobile = useMemo(() => {
    return (
      <>
        {allImmobile?.map((immobile, index) => {
          return (
            <div key={index} className="card card-shadow">
              <div key={index} className="card-header card-image">
                <ImageSlider images={immobile?.images} />
              </div>

              <div className="card-details">
                <div className="street-container">
                  <p className="icon">{<UilLocationPoint />} </p>
                  {immobile.location}
                </div>
              </div>
              <div className="card-body">
                <div>{immobile.title}</div>
                <div className="card-rooms">
                  <p className="card-rooms">
                    <UilArrowResizeDiagonal /> {immobile?.details?.size}
                  </p>
                  <p className="card-rooms">
                    <UilBedDouble /> {immobile?.details?.bedRooms}
                  </p>
                  <p className="card-rooms">
                    <UilBath /> {immobile?.details?.bathRooms}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <Link
                  href={{
                    pathname: "/immobiledetails",
                    query: immobile.projectNumber,
                  }}
                >
                  <button className="btn">Details</button>
                </Link>
                <Link href={"/#about"}>
                  <button className="btn btn-outline">
                    Contact Information
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  }, [allImmobile]);

  return (
    <>
      <NavBar />
      <div className="home-upper-container">
        <div className="card-grid-home">{memorizedImmobile}</div>
      </div>
    </>
  );
}
