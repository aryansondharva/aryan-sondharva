import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff] border-t-4 py-[6rem] px-4 flex items-center justify-center w-full text-[#151515]">
      <div className="max-w-7xl w-full">
        <div className="flex md:flex-row flex-col justify-around items-center gap-6 md:gap-4">
          <div className="text-center flex flex-col gap-1 md:gap-3">
            <h1 className="text-2xl lg:text-3xl">Connect on Email</h1>
            <a href="mailto:contact@aryansondharva.in" target="_blank">contact@aryansondharva.in</a>
          </div>
          <div className="text-center flex flex-col gap-1 md:gap-3">
            <h1 className="text-2xl lg:text-3xl">Connect on Whatsapp</h1>
            <a href="https://wa.me/+918097296453?text=Hii Aryan" target="_blank">
              +91 8097296453
            </a>
          </div>
          <div className="text-center flex flex-col gap-1 md:gap-3">
            <h1 className="text-2xl lg:text-3xl">Address</h1>
            <a href="https://maps.app.goo.gl/78J2yRhk5JMYbAD5A" target="_blank">
              Kamothe, Navi Mumbai, Maharashtra, <br />India - 410206
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <motion.div
            className="h-2 w-full text-center bg-black my-[2rem] rounded-full"
            initial={{ width: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ width: "100%" }}
            exit={{ width: 0 }}
          />
        </div>

        {/* Copyright Section */}
        <div className="w-full text-center text-[#151515]">
          <span>
            © All Rights Reserved <br />
            {year} Aryan Sondharva&apos;s Portfolio
          </span>
        </div>
        <div className="w-full flex justify-between items-center gap-2 flex-col md:flex-row md:mt-6 mt-4">
          <div>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
