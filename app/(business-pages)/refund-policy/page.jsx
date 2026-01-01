"use client";

import Footer from "@/components/Footer";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const RefundPolicyPage = () => {
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
          <h2 className="header-h">Refund Policy</h2>
          <p className="mb-4">
            We strive to deliver high-quality services to our clients. This
            refund policy explains the circumstances under which refunds are
            applicable.
          </p>

          <ol className="list-decimal list-inside list-wrapper">
            <li>
              <span>Refund Eligibility</span>
              <div>
                <p>
                  Project Cancellation Before Start: A full refund will be
                  provided if the project is canceled before any work begins.
                </p>
                <p>
                  Partial Refund: If the project is canceled after partial
                  completion, the refund will be proportional to the remaining
                  work.
                </p>
              </div>
            </li>
            <li>
              <span>No Refunds After Project Completion</span>
              <div>
                <p>
                  Once the final deliverables are approved and submitted, no
                  refunds will be provided.
                </p>
              </div>
            </li>
            <li>
              <span>Payment Gateway Fees</span>
              <div>
                <p>
                  Refunds will exclude any processing fees charged by Razorpay
                  or other payment platforms.
                </p>
              </div>
            </li>
            <li>
              <span>How to Request a Refund</span>
              <div>
                <p>
                  To request a refund, contact us with your project details and
                  proof of payment:
                </p>
                <div className="flex flex-col gap-1">
                  <span>
                    <a href="mailto:contact@aryansondharva.in">
                      Email - contact@aryansondharva.in
                    </a>
                  </span>
                  <span>
                    <a href="tel:+918097296453">Phone - +91 8097296453</a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span>Dispute Resolution</span>
              <div>
                <p>
                  We aim to resolve disputes amicably. If a resolution cannot be
                  reached, disputes will be subject to the jurisdiction of
                  courts in Maharashtra, India.
                </p>
              </div>
            </li>
            <li>
              <span>Policy Updates</span>
              <div>
                <p>
                  This refund policy may be updated at any time. Updates will be
                  published on this page.
                </p>
              </div>
            </li>
            <li>
              <span>Contact Information</span>
              <div className="flex flex-col gap-1">
                <p>For refund inquiries, contact us via:</p>
                <div className="flex flex-col gap-1">
                  <span>
                    <a href="mailto:contact@aryansondharva.in">
                      Email - contact@aryansondharva.in
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

export default RefundPolicyPage;
