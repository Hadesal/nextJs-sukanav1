import React, { useMemo, useContext } from "react";
import ImageSlider from "@/components/ImageSilider";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilBedDouble } from "@iconscout/react-unicons";
import { UilBath } from "@iconscout/react-unicons";
import { UilArrowResizeDiagonal } from "@iconscout/react-unicons";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import { ImmobileContext } from "@/contexts/ImmobileContext";
import { useEffect, useState } from "react";
import { getImmobile } from "@/utils/fechtMethods";
import FilterComponent from "../components/FilterComponent";

export default function Immobile() {
  const { allImmobile } = useContext(ImmobileContext);
  const [filtAllImmobile, setFilAllImmobile] = useState([{}]);
  const [currency, setCurrency] = useState("en-US"); //
  const [location, setLocation] = useState(); //

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    getImmobile().then((data) => setFilAllImmobile(data));
  }, []);

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;

    const filteredImmobile = allImmobile.filter((immobile) =>
      selectedLocation ? immobile.location === selectedLocation : true
    );

    setFilAllImmobile(filteredImmobile);
    setLocation(selectedLocation);
  };

  const currencyOption = currency === "de-AT" ? "EUR" : "USD";

  
    const handleReload = () => {
      window.location.reload();
    };

  const countryOptions = [];
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

  console.log(allImmobile);
  console.log(locations);


  const memorizedImmobile = useMemo(() => {
    return (
      <>
        {allImmobile?.map((immobile, index) => {
            return (
              <div key={index} className="card card-shadow">
                <div key={index} className="card-header card-image">
                  <div className="image-header">
                    <div>
                      <ImageSlider images={immobile?.images}/>
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
                    <div>{immobile?.details?.description.slice(0, 80)}...</div>
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
                  <Link href={"/#about"}>
                    <button className="btn btn-outline btn-Size">
                      Contact
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
      <div className="filter-container">
        <div className="filter-header">
        <button className="btn margBtn" onClick={handleReload}>Reset</button>

          <div className="filter-elements">
            
            <FilterComponent
              label="Currency "
              options={currencyOptions}
              onChange={handleCurrencyChange}
              value={currency}
            />
            <FilterComponent
              label="Location"
              options={countryOptions}
              onChange={handleLocationChange}
            />
           
            <div className="filter-combo">
              <label>
                {" "}
                Price:
                <select className="select-ctn">
                  <option value="">Select price range</option>
                  <option value="$0-$50">$0 - $50</option>
                  <option value="$50-$100">$50 - $100</option>
                  <option value="$100-$200">$100 - $200</option>
                  <option value="$200+">$200+</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="home-upper-container">
        <div className="card-grid-home">{memorizedImmobile}</div>
      </div>
    </>
  );
}
