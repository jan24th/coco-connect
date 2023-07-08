import { CcCoconut } from "../icons/CcCoconut";
import Link from "next/link";
import React from "react";
import { CcTheme } from "../atom/CcTheme";

export const CcHeader = () => {
  return (
    <div className="border-b border-gray-400">
      <div className="h-15 px-10 container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CcCoconut height={46} width={46} />
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent font-black text-2xl">
            COCO LIVE
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <Link className="font-semibold" href={"/"}>
            Bolg
          </Link>
          <Link className="font-semibold" href={"/"}>
            Timeline
          </Link>
          <div className="!ml-10">translate</div>
          <CcTheme />
        </div>
      </div>
    </div>
  );
};
