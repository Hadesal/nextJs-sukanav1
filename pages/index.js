import { Inter } from "next/font/google";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilBedDouble } from "@iconscout/react-unicons";
import { UilBath } from "@iconscout/react-unicons";
import { UilArrowResizeDiagonal } from "@iconscout/react-unicons";

import { useState, useEffect } from "react";

const getImmobiles = async () => {
  const response = await fetch("http://localhost:3000/api/allimmobiles");
  return await response.json();
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;



export default function Home() {


  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("api/allimmobiles");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [allImmobile, setAllImmobile] = useState([{}]);

  useEffect(() => {
    getImmobiles().then((data) => setAllImmobile(data));
  }, []);

  const arrayOfImages = allImmobile?.map((immobile)=>{
    return immobile.images?.map((image,index)=>image)
  });
  

  
  return (
<>


      <div className="hero-container">
        <div className="hero-left">
          <h2>About us</h2>
          <p className="about-text">
            Welcome to Surkana! Whether you're in the market for a
            new home, looking to sell your current property, or interested in
            investing in real estate, we're here to help. Our website is your
            one-stop-shop for all things property-related, with a wide range of
            listings and resources to help you make informed decisions.
            <br />
            <br />
            We
            understand that buying or selling a property can be a daunting
            process, which is why we've made it our mission to provide a
            user-friendly platform that's easy to navigate. Our listings are
            comprehensive and up-to-date, so you can be sure you're getting the
            most accurate information possible. In addition to our listings, we
            also offer a range of resources to help you navigate the property
            market.
            <br />
            <br />
            From guides on buying and selling, to tips on interior
            design and renovation, we're here to provide you with all the
            information you need to make the most of your property investment.
            Thank you for choosing our website as your go-to source for property
            information.
          </p>
        </div>
        <div className="hero-right">
          
         
       
        </div>
      </div>
      <div className="animation"></div>

<div className="examples">
  <div className="link-container">
      <a href="/properties"> Our Properties</a>
  </div>

   <div className="card-grid-home">
          {data?.map((val, index) => {
            return (
              <div key={val._id} className="card card-shadow">
                <div key={index} className="card-header card-image">
               {arrayOfImages && (
                <img
                    src={arrayOfImages[0]}
                    alt="house"
                  />
               )} 
                </div>
                <div className="card-details">
                  <div className="street-container">
                    <p className="icon">{<UilLocationPoint />} </p>
                    {val.location}
                  </div>
                </div>

                <div className="card-body">
                  <div>{val.title}</div>
                  <div className="card-rooms">
                    <p className="card-rooms">
                      <UilArrowResizeDiagonal /> {val.size}
                    </p>
                    <p className="card-rooms">
                      <UilBedDouble /> {val.bedroom}
                    </p>
                    <p className="card-rooms">
                      <UilBath /> {val.bathroom}
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">Details</button>
                  <button className="btn btn-outline">Contact Seller</button>
                </div>
              </div>
            );
          })}
        </div>
</div>
    </>
  );
}
