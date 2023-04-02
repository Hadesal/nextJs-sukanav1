import Link from "next/link";

import Image from "next/image";
import house2 from "../public/assets/houses/house_2.jpg";
import card from "../public/assets/card.jpg";
import NavBar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSilider";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home" id="home">
          {/* <ImageSlider/> */}
          <Image src={house2} alt="" className="home__img" />
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__data-title">
                Explore The <br /> Best{" "}
                <b>
                  Beautiful <br /> Houses
                </b>
              </h1>
              <Link
                href={{
                  pathname: "/immobile",
                }}
              >
                <button className="button"> Explore</button>
              </Link>
            </div>
          </div>
        </section>

        {/* <!--==================== ABOUT ====================--> */}

        <section className="about section" id="about">
          <div className="about-center">
            <div className="grid-about">
              <div>
                <div className="about__data">
                  <h2 className="section__title about__title">
                    More Information <br /> About The Best Beaches
                  </h2>
                  <p className="about__description">
                    Welcome to Surkana! Whether you're in the market for a new
                    home, looking to sell your current property, or interested
                    in investing in real estate, we're here to help. Our website
                    is your one-stop-shop for all things property-related, with
                    a wide range of listings and resources to help you make
                    informed decisions.
                    <br />
                    <br />
                    We understand that buying or selling a property can be a
                    daunting process, which is why we've made it our mission to
                    provide a user-friendly platform that's easy to navigate.
                    Our listings are comprehensive and up-to-date, so you can be
                    sure you're getting the most accurate information possible.
                    In addition to our listings, we also offer a range of
                    resources to help you navigate the property market.
                    <br />
                    <br />
                    From guides on buying and selling, to tips on interior
                    design and renovation, we're here to provide you with all
                    the information you need to make the most of your property
                    investment. Thank you for choosing our website as your go-to
                    source for property information.
                  </p>
                  <Link
                    href={{
                      pathname: "/immobile",
                    }}
                  >
                    <button className="button">Find your Home</button>
                  </Link>
                </div>
              </div>
              <div>
                <Image src={card} alt="contact" className="contact" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
