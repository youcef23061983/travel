// import Image from "next/image";

// const Partnership2 = () => {
//   return (
//     <div className="marquee fadeout-horizontal" style={{ "--num-items": 7 }}>
//       <div className="marquee-track">
//         <div className="marquee-item2" style={{ "--item-position": 1 }}>
//           <Image
//             src="/homepage/partners/1.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 1"
//           />
//         </div>
//         <div className="marquee-item2" style={{ "--item-position": 2 }}>
//           <Image
//             src="/homepage/partners/2.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 2"
//           />
//         </div>
//         <div className="marquee-item2" style={{ "--item-position": 3 }}>
//           <Image
//             src="/homepage/partners/3.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 3"
//           />
//         </div>
//         <div className="marquee-item2" style={{ "--item-position": 4 }}>
//           <Image
//             src="/homepage/partners/4.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 4"
//           />
//         </div>
//         <div className="marquee-item2" style={{ "--item-position": 5 }}>
//           <Image
//             src="/homepage/partners/5.png"
//             width={40}
//             className="img"
//             height={40}
//             alt="Partner 5"
//           />
//         </div>
//         <div className="marquee-item2" style={{ "--item-position": 6 }}>
//           <Image
//             src="/homepage/partners/6.png"
//             width={40}
//             height={40}
//             className="img"
//             alt="Partner 6"
//           />
//         </div>
//         <div className="marquee-item2" style={{ "--item-position": 7 }}>
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

// export default Partnership2;
import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";

const Partnership2 = () => {
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
            className="marquee-item2"
            style={{
              "--item-position": index + 1,
              animation: `${
                isRTL ? "marquee-move-rtl" : "marquee-move"
              } var(--speed) linear infinite`,
            }}
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

export default Partnership2;
