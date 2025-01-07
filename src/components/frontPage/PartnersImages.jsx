// import Image from "next/image";
// import React from "react";

// const PartnersImages = () => {
//   return (
//     <div className="marquee fadeout-horizontal" style={{ "--num-items": 7 }}>
//       <div className="marquee-track">
//         <div className="marquee-item" style={{ "--item-position": 1 }}>
//           <Image
//             src="/homepage/partners/1.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 1"
//           />
//         </div>
//         <div className="marquee-item" style={{ "--item-position": 2 }}>
//           <Image
//             src="/homepage/partners/2.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 2"
//           />
//         </div>
//         <div className="marquee-item" style={{ "--item-position": 3 }}>
//           <Image
//             src="/homepage/partners/3.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 3"
//           />
//         </div>
//         <div className="marquee-item" style={{ "--item-position": 4 }}>
//           <Image
//             src="/homepage/partners/4.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 4"
//           />
//         </div>
//         <div className="marquee-item" style={{ "--item-position": 5 }}>
//           <Image
//             src="/homepage/partners/5.png"
//             width={40}
//             className="img"
//             height={40}
//             alt="Partner 5"
//           />
//         </div>
//         <div className="marquee-item" style={{ "--item-position": 6 }}>
//           <Image
//             src="/homepage/partners/6.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 6"
//           />
//         </div>
//         <div className="marquee-item" style={{ "--item-position": 7 }}>
//           <Image
//             src="/homepage/partners/7.png"
//             width={40}
//             height={40}
//             alt="Partner 7"
//             className="img"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnersImages;

import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";

const PartnersImages = () => {
  const locale = useLocale();
  const isRTL = locale === "en";

  return (
    <div
      // className={`marquee fadeout-horizontal ${isRTL ? "ltr" : "rtl"}`}
      className="marquee fadeout-horizontal"
      style={{ "--num-items": 7 }}
    >
      <div className="marquee-track">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="marquee-item"
            style={{ "--item-position": index + 1 }}
          >
            <Image
              src={`/homepage/partners/${index + 1}.png`}
              width={40}
              height={40}
              className="img"
              alt={`Partner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersImages;
// import { useLocale, useTranslations } from "next-intl";
// import Image from "next/image";

// const PartnersImages = () => {
//   const locale = useLocale();
//   const isRTL = locale === "ar";
//   const t = useTranslations("HomePage");

//   const partnersImages = Array.isArray(t("Partners"))
//     ? t("Partners")
//     : [...Array(7)].map((_, index) => `/homepage/partners/${index + 1}.png`);

//   console.log("partnersImages:", partnersImages); // Debugging

//   return (
//     <div
//       className={`marquee fadeout-horizontal ${isRTL ? "rtl" : ""}`}
//       // className="marquee fadeout-horizontal"
//       style={{ "--num-items": partnersImages.length }}
//     >
//       <div className="marquee-track">
//         {partnersImages.map((image, index) => (
//           <div
//             key={index}
//             className={`marquee-item ${isRTL ? "marquee-item-rtl" : ""}`}
//             style={{ "--item-position": index + 1 }}
//           >
//             <Image
//               src={image}
//               width={40}
//               height={40}
//               className="img"
//               alt={`Partner ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnersImages;
