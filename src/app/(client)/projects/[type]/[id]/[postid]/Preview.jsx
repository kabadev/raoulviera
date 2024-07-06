"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Preview = ({ data, type }) => {
  return (
    <div>
      {type === "cad" ? (
        <iframe
          src={data}
          className="min-h-[400px] w-full"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      ) : (
        <Image
          width={1000}
          height={500}
          className="rounded-md w-full h-full"
          src={data}
          alt="Gif image"
        />
      )}
    </div>
  );
};

export default Preview;
