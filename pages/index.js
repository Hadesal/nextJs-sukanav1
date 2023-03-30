import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilBedDouble } from "@iconscout/react-unicons";
import { UilBath } from "@iconscout/react-unicons";
import { UilArrowResizeDiagonal } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";
import ImageSlider from "@/components/ImageSilider";
import { getImmobile } from "@/utils/fechtMethods";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Home() {
  const [allImmobile, setAllImmobile] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    console.log(name);
    getImmobile().then((data) => {
      setAllImmobile(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} className="spinner" spin />
        </div>
      ) : (
        <>
          <div className="hero-container">
            <div className="hero-left">
              <h2>About us</h2>
              <p className="about-text">
                Welcome to Surkana! Whether you're in the market for a new home,
                looking to sell your current property, or interested in
                investing in real estate, we're here to help. Our website is
                your one-stop-shop for all things property-related, with a wide
                range of listings and resources to help you make informed
                decisions.
                <br />
                <br />
                We understand that buying or selling a property can be a
                daunting process, which is why we've made it our mission to
                provide a user-friendly platform that's easy to navigate. Our
                listings are comprehensive and up-to-date, so you can be sure
                you're getting the most accurate information possible. In
                addition to our listings, we also offer a range of resources to
                help you navigate the property market.
                <br />
                <br />
                From guides on buying and selling, to tips on interior design
                and renovation, we're here to provide you with all the
                information you need to make the most of your property
                investment. Thank you for choosing our website as your go-to
                source for property information.
              </p>
            </div>
            <div className="hero-right"></div>
          </div>
          <div className="animation"></div>

          <div className="examples">
            <div className="link-container">
              <Link href={"/immobile"}>Our Properties</Link>
            </div>

            <div className="card-grid-home">
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
                          query: immobile,
                        }}
                      >
                        <button className="btn">Details</button>
                      </Link>
                      <button className="btn btn-outline">
                        Contact Seller
                      </button>
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
