// import React from 'react'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import  ListingItem  from "../components/ListingItem";
import { Navigation } from "swiper/modules";



export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=3`);
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=3`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=3`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 text-3xl font-bold lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span> <br />{" "}
          place with ease.
        </h1>
        <div className="text-gray-400 text-sm sm:text-lg">
          Hive Homes is the best place to find your next perfect place to live.
          <br />
          We have wide range of properties for you to choose from.
        </div>
        <Link
          className="text-xs sm:text-sm text-blue-700 font-bold hover:underline"
          to={"/search"}
        >
          Let&apos;s get started
        </Link>
      </div>

      {/*Slider*/}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                className="h-[500px]"
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Show all listings */}

      <div className="mx-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-3xl font-semibold text-slate-600 px-5 md:px-20">Recent Offers</h2>
              <Link className="text-lg text-blue-800 hover:underline px-5 md:px-20" to={"/search?offer=true"}>Show more offers</Link>
            </div>
            <div className="flex flex-wrap px-5 gap-3 md:gap-20 md:px-20">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-3xl font-semibold text-slate-600 px-5 md:px-20">Recent places for sale</h2>
              <Link className="text-lg text-blue-800 hover:underline px-5 md:px-20" to={"/search?type=sale"}>Show more places for sale</Link>
            </div>
            <div className="flex flex-wrap px-5 gap-3 md:gap-20 md:px-20">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-3xl font-semibold text-slate-600 px-5 md:px-20">Recent places for Rent</h2>
              <Link className="text-lg text-blue-800 hover:underline px-5 md:px-20" to={"/search?type=rent"}>Show more places for rent</Link>
            </div>
            <div className="flex flex-wrap px-5 gap-3 md:gap-20 md:px-20">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}        

      </div>
    </div>
  );
}
