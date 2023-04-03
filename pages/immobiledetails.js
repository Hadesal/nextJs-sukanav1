import NavBar from "@/components/Navbar";
import { getOneImmobile } from "@/utils/fechtMethods";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ImageSlider from "@/components/ImageSilider";
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

  {
    new Date(immobile.completionOfBuild).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  console.log(immobile);
  return (
    <>
      <NavBar />
      {!immobile ? (
        ""
      ) : (
        <div className="details-container">
          <>
            <ImageSlider
              images={immobile?.images}
              className={"slide_details"}
            />
          </>
          <div className="details-grid">
            <div className="details-grid-left">
            <h2 className="det-header">Info </h2>
              <div className="immo_details_field">
                
                <span>Project Number:</span>
                {immobile.projectNumber}
              </div>

              <div className="immo_details_field">
                <span>Address:</span>
                {immobile.address}
              </div>

              <div className="immo_details_field">
                <span>City: </span>
                {immobile.city}
              </div>
              <div className="immo_details_field">
                <span>Completion of Build:</span>{" "}
                {new Date(immobile.completionOfBuild).toLocaleDateString()}
              </div>

              <div className="immo_details_field">
                <span>Living Space:</span>
                {immobile.livingSpace}
              </div>

              <div className="immo_details_field">
                <span>Location:</span>
                {immobile.location}
              </div>

              <div className="immo_details_field">
                <span>Price:</span>
                {immobile.price}
              </div>

              <div className="immo_details_field">
                <span>Immobil Type:</span> {immobile.immobileType}
              </div>
              <div className="immo_details_field">
                <span>Rooms:</span> {immobile.rooms}
              </div>
              <div className="immo_details_field">
                {" "}
                <span>Zip: </span>
                {immobile.zib}
              </div>
            </div>
            <div className="details-grid-right">
            <div className="immo_details_field">
              <h2 className="det-header">Details </h2>
            </div>
            <ul>
              <li className="immo_details_field">
                <span>Bedrooms:</span>
                {immobile?.details?.bedRooms}
              </li>
              <li className="immo_details_field">
                {" "}
                <span>Bathrooms: </span> {immobile?.details?.bathRooms}
              </li>
              <li className="immo_details_field">
                {" "}
                <span>Size: </span> {immobile?.details?.size}
              </li>

              <li className="desrip-details">
                {" "}
                <span>Description: </span>
                {immobile?.details?.description}
              </li>
            </ul>
            </div>
          </div>
        </div>
      )}

      <div>{errorMessage ? errorMessage : ""}</div>
    </>
  );
}
