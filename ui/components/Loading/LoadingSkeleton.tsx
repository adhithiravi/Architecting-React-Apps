import React from "react";
import Image from "next/image";
import placeholderLogo from "../../../public/images/white-logo.png";

export default function LoadingSkeleton() {
  return (
    <div className="gallery-wrapper">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="pie-item">
          <Image
            src={placeholderLogo}
            alt="Loading image"
            width={400}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}
