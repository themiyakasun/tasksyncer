"use client";

import React from "react";
import { IKImage } from "imagekitio-next";

import config from "@/lib/config";

const AvatarButton = ({ path, name }: { path: string; name: string }) => {
  return (
    <>
      <IKImage
        path={path || null || undefined}
        urlEndpoint={config.env.imageKit.urlEndPoint}
        alt={name}
        width={24}
        height={24}
        className="rounded-full"
        loading={"lazy"}
        lqip={{ active: true }}
      />
      {name}
    </>
  );
};
export default AvatarButton;
