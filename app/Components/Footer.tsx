import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10  bg-gradient-to-r from-yellow-100 via-gray-200 to-gray-100 text-base-content">
      <div>
        <Link href="/">
          <Image
            width={300}
            height={200}
            src="/Images/town.png"
            alt="logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Link>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}
