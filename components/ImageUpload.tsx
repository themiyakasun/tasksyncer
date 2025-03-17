"use client";

import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useRef, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

import config from "@/lib/config";

const {
  env: {
    imageKit: { publicKey, urlEndPoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndPoint}/api/auth/imageKit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const ImageUpload = ({
  onFileChange,
  folder,
}: {
  onFileChange: (filePath: string) => void;
  folder: string;
}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log(error);

    toast.error("Image upload failed");
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast.success("Image Upload successfully");
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndPoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        folder={folder}
      />

      <button
        className="w-full flex items-center justify-center gap-2 bg-[var(--primitives-gray-600)]/20 py-2 rounded-[8px] cursor-pointer"
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image src="/icons/plus-black.png" alt="add" width={20} height={20} />
        <p className="text-sm text-[var(--primitives-gray-600)] capitalize">
          Upload a file
        </p>
        {file && (
          <p className="text-sm text-[var(--primitives-gray-600)]">
            {file.filePath}
          </p>
        )}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={200}
          height={200}
        />
      )}
    </ImageKitProvider>
  );
};
export default ImageUpload;
