import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Drawer() {
  return (
    <div className="drawer" style={{ zIndex: 9999 }}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn drawer-button">
          <FaBars />
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-xl space-y-4">
          <Link href="/">
            <Image
              width={300}
              height={200}
              src="/Images/hometown.png"
              alt="logo"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Link>
          {/* Sidebar content here */}
          <li>
            <Link href="/equipment">Equipment Rentals</Link>
          </li>
          <li>
            <Link href="/party">Party Rentals</Link>
          </li>
          <li>
            <Link href="/party">Used Rentals</Link>
          </li>
          <li>
            <Link href="/party">Propane Rentals</Link>
          </li>
          <li>
            <Link href="/party">Forms Rentals</Link>
          </li>
          <li>
            <Link href="/party">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
