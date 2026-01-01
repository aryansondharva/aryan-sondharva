"use client";

import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
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
          <h2 className="header-h">Privacy Policy</h2>
          <p className="mb-4">
            At Aryan Shinde&apos;s Portfolio, your privacy is a priority. This
            policy explains how your information is collected, used, and
            protected.
          </p>

          <ol className="list-decimal list-inside list-wrapper">
            <li>
              <span>Information We Collect</span>
              <div>
                <p>We may collect the following information:</p>
                <ul>
                  <li>
                    Name, email address, and phone number through the contact
                    form.
                  </li>
                  <li>Information related to project inquiries or payments.</li>
                </ul>
              </div>
            </li>
            <li>
              <span>How We Use Your Information</span>
              <div>
                <p>We use your information to:</p>
                <ul>
                  <li>Respond to your inquiries and provide services.</li>
                  <li>Process payments and transactions securely.</li>
                  <li>Improve our website and user experience.</li>
                </ul>
              </div>
            </li>
            <li>
              <span>Data Protection</span>
              <div>
                <p>
                  We use secure systems to protect your data from unauthorized
                  access. Personal information is not shared with third parties
                  except as required for payments or legal purposes.
                </p>
              </div>
            </li>
            <li>
              <span>Third-Party Services</span>
              <div>
                <p>
                  We use Razorpay for payment processing. Please refer to
                  Razorpay&apos;s privacy policy for details on their data
                  handling practices.
                </p>
              </div>
            </li>
            <li>
              <span>Cookies</span>
              <div>
                <p>
                  Our website may use cookies to enhance your browsing
                  experience. You can disable cookies through your browser
                  settings.
                </p>
              </div>
            </li>
            <li>
              <span>Your Rights</span>
              <div>
                <p>
                  You can request access to, correction, or deletion of your
                  personal information by contacting us:
                </p>
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
            <li>
              <span>Policy Updates</span>
              <div>
                <p>
                  We reserve the right to update this policy. Changes will be
                  reflected on this page with the effective date.
                </p>
              </div>
            </li>
            <li>
              <span>Contact Information</span>
              <div className="flex flex-col gap-1">
                <p>
                  For questions regarding this privacy policy, contact us via:
                </p>
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

export default PrivacyPolicyPage;
