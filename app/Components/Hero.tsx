"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import Carosuel from "./Carosuel";
import builder from "/Users/mark/hometownrentals/public/Images/builders.json";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-yellow-100 via-gray-200 to-gray-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="m-8 p-8 md:p-12">
          <h1 className="text-5xl font-bold">Welcome to Hometown Rentals!</h1>
          <p className="py-6">
            The Hometown Rentals Team of friendly, experienced owners, managers
            and employees are waiting to help you plan and execute your next
            party and event or tackle that construction job that needs the right
            piece of construction equipment.
          </p>
          <div className="flex flex-col md:flex-row">
            <Link className="flex flex-col md:flex-row" href="/party">
              <button className="bg-yellow-10 hover:bg-black hover:text-white active:bg-opacity-70 p-3 rounded-xl border-black border-2 text-black font-bold text-lg transition-opacity mb-4 md:mb-0 md:mr-4">
                Party Rental
              </button>
            </Link>
            <Link className="flex flex-col md:flex-row" href="/equipment">
              <button className="bg-base-200 hover:bg-yellow-10 hover:text-black hover:border-yellow-200 active:bg-opacity-70 p-3 rounded-xl border-black border-2 text-black font-bold text-lg transition-opacity">
                Equipment Rental
              </button>
            </Link>
          </div>
          <div className="m-8">
            <Player
              className="player"
              autoplay
              loop
              src={builder}
              style={{
                width: "90%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
