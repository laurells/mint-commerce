import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
//@ts-ignore
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import Slideshow from "../components/HeroSection/Slideshow";
import OverlayContainer from "../components/OverlayContainer/OverlayContainer";
import TestiSlider from "../components/TestiSlider/TestiSlider";
import { apiProductsType, itemType } from "../context/cart/cart-types";
import LinkButton from "../components/Buttons/LinkButton";
import ourShop from "../../public/images/ourshop.png";

type Props = {
  products: itemType[];
};

const Home: React.FC<Props> = ({ products }) => {
  


  return (
    <>
      {/* ===== Header Section ===== */}
      <Header />

      {/* ===== Carousel Section ===== */}
      <Slideshow />

      <main id="main-content" className="-mt-20">
        {/* ===== Category Section ===== */}
        <section className="w-full h-auto py-10 border border-b-2 border-gray-100">
          <div className="app-max-width app-x-padding h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full sm:col-span-2 lg:col-span-2">
               {/* @ts-ignore */}
              <OverlayContainer
                imgSrc="/images/banner_minipage1.jpg"
                imgSrc2="/images/banner_minipage1-tablet.jpg"
                imgAlt="New Arrivals"
              >
                 {/* @ts-ignore */}
                <LinkButton
                  href="#"
                  extraClass="absolute bottom-10-per sm:right-10-per z-20"
                >
                  New arrivals
                </LinkButton>
              </OverlayContainer>
            </div>
            <div className="w-full">
               {/* @ts-ignore */}
              <OverlayContainer
                imgSrc="/images/banner_minipage2.jpg"
                imgAlt="Women Collection"
              >
                 {/* @ts-ignore */}
                <LinkButton
                  href="#"
                  extraClass="absolute bottom-10-per z-20"
                >
                  Women collection
                </LinkButton>
              </OverlayContainer>
            </div>
            <div className="w-full">
               {/* @ts-ignore */}
              <OverlayContainer
                imgSrc="/images/banner_minipage3.jpg"
                imgAlt="Men Collection"
              >
                {/* @ts-ignore */}
                <LinkButton
                  href="#"
                  extraClass="absolute bottom-10-per z-20"
                >
                  Men collection
                </LinkButton>
              </OverlayContainer>
            </div>
          </div>
        </section>

        {/* ===== Best Selling Section ===== */}
        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
          <div className="flex justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
              <h2 className="text-3xl mb-4">Best selling</h2>
              <span>Here are some of our best selling products. Explore yourself in the latest trends.</span>
            </div>
          </div>
        </section>

        {/* ===== Testimonial Section ===== */}
        <section className="w-full hidden h-full py-16 md:flex flex-col items-center bg-amber-100">
          <h2 className="text-3xl">Testimonial</h2>
          <TestiSlider />
        </section>

        {/* ===== Featured Products Section ===== */}
        <section className="app-max-width app-x-padding my-16 flex flex-col">
          <div className="text-center mb-6">
            <h2 className="text-3xl">Featured products</h2>
          </div>
          <div className="flex justify-center">
            <Button
              value="See more"
            />
          </div>
        </section>

        <div className="border-gray-100 border-b-2"></div>

        {/* ===== Our Shop Section */}
        <section className="app-max-width mt-16 mb-20 flex flex-col justify-center items-center text-center">
          <div className="textBox w-3/4 md:w-2/4 lg:w-2/5 mb-6">
            <h2 className="text-3xl mb-6">Our shop</h2>
            <span className="w-full">Stop by our stores to learn the stories behind our products, get a personal styling session, or shop the latest in person</span>
          </div>
          <div className="w-full app-x-padding flex justify-center">
            <Image src={ourShop} alt="Our Shop" />
          </div>
        </section>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </>
  );
};

export default Home;