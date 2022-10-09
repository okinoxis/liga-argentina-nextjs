import Image from "next/image";
import { useState } from "react";

export default function CustomImage(src, size) {
   const [imageError, setImageError] = useState(false);
   return (
      <Image
         src={imageError ? "/404.png" : src}
         alt=""
         height={size}
         width={size}
         onError={() => setImageError(true)}
      />
   );
}
