import React from "react";
import ImageSlider from "@/components/ImageSilider";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilBedDouble } from "@iconscout/react-unicons";
import { UilBath } from "@iconscout/react-unicons";
import { UilArrowResizeDiagonal } from "@iconscout/react-unicons";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import { useEffect, useState } from "react";
import FilterComponent from "../components/FilterComponent";
import ContactUs from "./contactUs";
import { getImmobiles } from "@/utils/immobiles";

export default function Immobile() {
  const [allImmobile, setAllImmobile] = useState([{}]);
  const [currency, setCurrency] = useState("en-US"); //
  const [filteredImmobile, setFilteredImmobile] = useState();
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    getImmobiles().then((immobile) => {
      setFilteredImmobile(immobile);
      setAllImmobile(immobile);
    });
  }, []);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);

    const filteredImmobile = allImmobile.filter((immobile) =>
      selectedLocation ? immobile.location === selectedLocation : true
    );

    setFilteredImmobile(filteredImmobile);
  };

  const currencyOption = currency === "de-AT" ? "EUR" : "USD";

  const handleReload = () => {
    setSelectedLocation("");
    window.location.reload();
  };

  const countryOptions = [{ label: "All", value: "" }];
  const locations = new Set(allImmobile?.map((immobile) => immobile.location));
  locations?.forEach((item) => {
    countryOptions.push({ label: item, value: item });
  });

  const currencyOptions = [
    { label: "USD", value: "en-US" },
    { label: "AED", value: "ar-AE" },
    { label: "EUR", value: "de-AT" },
  ];

  const { format } = new Intl.NumberFormat(currency, {
    style: "currency",
    currency: currencyOption,
  });

  return (
    <>
      <NavBar />
      {!filteredImmobile ? (
        <div>....is Loading</div>
      ) : (
        <>
          <div className="filter-container">
            <div className="filter-header">
              <button className="margBtn" onClick={handleReload}>
                Reset
              </button>

              <div className="filter-elements">
                <FilterComponent
                  label="Currency"
                  options={currencyOptions}
                  onChange={handleCurrencyChange}
                  value={currency}
                />
                <FilterComponent
                  label="Location"
                  options={countryOptions}
                  onChange={handleLocationChange}
                />
              </div>
            </div>
          </div>
          <div className="home-upper-container">
            <div className="card-grid-home">
              {filteredImmobile?.map((immobile, index) => {
                return (
                  <div key={index} className="card card-shadow">
                    <div key={index} className="card-header card-image">
                      <div className="image-header">
                        <div>
                          <ImageSlider images={immobile?.images} />
                        </div>
                      </div>
                    </div>

                    <div className="card-details">
                      <div className="street-container">
                        <p className="icon">{<UilLocationPoint />} </p>
                        {immobile.location}
                      </div>
                      <div className="price">{format(immobile.price)}</div>
                    </div>
                    <div className="card-body">
                      <div>{immobile.title}</div>
                      <h3 className="card-h3"> {immobile.address}</h3>
                      <div className="immo-details-box">
                        <div>
                          <p>
                            {immobile?.details?.description.slice(0, 80)}...
                          </p>
                        </div>
                        <div> Size: {immobile?.details?.size} m²</div>
                      </div>
                      <div className="card-rooms">
                        <p className="card-rooms-icons">
                          <UilArrowResizeDiagonal /> {immobile?.details?.size}
                        </p>
                        <p className="card-rooms-icons">
                          <UilBedDouble /> {immobile?.details?.bedRooms}
                        </p>
                        <p className="card-rooms-icons">
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
                        <button className="btn btn-Size">Details</button>
                      </Link>
                      <Link
                        href={{
                          pathname: "/contactUs",
                          query: ContactUs,
                        }}
                      >
                        <button className="btn btn-outline btn-Size">
                          Contact
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
