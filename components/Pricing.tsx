"use client";

import React from "react";
import Image from "next/image";

import { useModalsStore } from "@/stores/modals";
import PriceCard from "@/components/PriceCard";
import { prices } from "@/constants/";

const Pricing = () => {
  const { hidePricingModal, pricingModalVisible } = useModalsStore(
    (state) => state,
  );
  return (
    <div
      className={`modal-wrapper ${pricingModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"} `}
      data-dialog-backdrop="modal"
      data-dialog-backdrop-close="true"
    >
      <div
        className={`modal-wrapper ${pricingModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"} `}
        data-dialog-backdrop="modal"
        data-dialog-backdrop-close="true"
      >
        <div className="modal max-w-[600px] p-6" data-dialog-backdrop="modal">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-medium text-black">Pricing</h1>

            <button onClick={hidePricingModal} className="cursor-pointer">
              <Image
                src="/icons/close-black.png"
                alt="close"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div className="flex h-full gap-10">
            {prices.map((price, index) => (
              <div className="w-[50%]" key={index}>
                <PriceCard
                  packageName={price.packageName}
                  description={price.description}
                  id={price.id}
                  items={price.items}
                  paymentLink={price.paymentLink}
                  priceId={price.priceId}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
