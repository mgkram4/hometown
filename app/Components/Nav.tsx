"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";
import Drawer from "./Drawer";

export default function Nav() {
  const [showBanner, setShowBanner] = useState(true);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <div className="navbar bg-base-100 bg-gradient-to-r from-yellow-100 via-gray-200 to-gray-100">
      <div className="flex-1 border-grey-200 rounded-xl">
        <Link href="/">
          <Image
            width={300}
            height={200}
            src="/Images/town.png"
            alt="logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <Drawer />
      </div>
      {showBanner && <Banner onClose={handleBannerClose} />}
    </div>
  );
}
