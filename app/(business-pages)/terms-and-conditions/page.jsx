"use client";

import Link from "next/link";
import React from "react";
import { ChevronLeftIcon } from "lucide-react";
import Footer from "@/components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <div className="py-6">
      <div className="px-6">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 bg-black text-white py-2 px-4 w-fit rounded-md pr-6 hover:bg-black/90 duration-300 transition-all ease-in-out"
          >
            <ChevronLeftIcon /> Back
          </Link>
        </div>
        <div className="pt-6 pb-[4rem]">
          <h2 className="header-h">Terms and Conditions</h2>
          <p className="mb-4">
            Welcome to Aryan Sondharva&apos;s Portfolio. By accessing or using this
            website, you agree to comply with and be bound by the following
            terms and conditions. If you do not agree to these terms, please
            refrain from using the website.
          </p>

          <ol className="list-decimal list-inside list-wrapper">
            <li>
              <span>Acceptance of Terms</span>
              <div>
                <p>
                  By accessing this website, you acknowledge that you have read,
                  understood, and agree to these terms.
                </p>
              </div>
            </li>
            <li>
              <span>Services Provided</span>
              <div>
                <p>
                  This website showcases the projects and services offered by
                  Aryan Shinde, including custom web and software development.
                  Specific terms for each service will be discussed and agreed
                  upon prior to commencement.
                </p>
              </div>
            </li>
            <li>
              <span>User Obligations</span>
              <div>
                <p>
                  You agree to provide accurate and complete information when
                  contacting or transacting through this website.
                </p>
                <p>
                  You agree not to misuse this website in any way, including
                  attempting to disrupt its functionality.
                </p>
              </div>
            </li>
            <li>
              <span>Intellectual Property</span>
              <div>
                <p>
                  All content, including text, images, code, and designs, is the
                  intellectual property of Aryan Shinde unless stated otherwise.
                  Unauthorized reproduction or distribution is strictly
                  prohibited.
                </p>
              </div>
            </li>
            <li>
              <span>Payment Terms</span>
              <div>
                <p>
                  Payments made through Razorpay or other supported methods are
                  subject to their respective terms and conditions. Full payment
                  terms will be outlined in project agreements.
                </p>
              </div>
            </li>
            <li>
              <span>Limitation of Liability</span>
              <div>
                <p>
                  Aryan Shinde is not liable for any direct, indirect, or
                  incidental damages arising from the use of this website or
                  services.
                </p>
              </div>
            </li>
            <li>
              <span>Governing Law</span>
              <div>
                <p>
                  These terms are governed by the laws of the state of
                  Maharashtra and the Republic of India. Disputes will be
                  resolved under the jurisdiction of courts in Maharashtra.
                </p>
              </div>
            </li>
            <li>
              <span>Contact Information</span>
              <div className="flex flex-col gap-1">
                <p>For any inquiries, contact us via:</p>
                <div className="flex flex-col gap-1">
                  <span>
                    <a href="mailto:contact@aryanshinde.in">
                      Email - contact@aryanshinde.in
                    </a>
                  </span>
                  <span>
                    <a href="tel:+918097296453">Phone - +91 8097296453</a>
                  </span>
                  <span>Contact Form on the Website</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
