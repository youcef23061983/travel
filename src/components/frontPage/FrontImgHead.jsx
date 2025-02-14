// import { useTranslations } from "next-intl";
// import AnimatedText from "../AnimatedText";

// function FrontImgHead() {
//   const t = useTranslations("HomePage");
//   return (
//     // <main className="bg-gray-900">
//     //   <div className="mx-auto max-w-6xl pt-14 text-white">
//     //     <section className="h-screen">
//     //       <p className="text-4xl md:text-[200px] md:leading-relaxed">
//     //         Scroll down...
//     //       </p>
//     //     </section>
//     //     <section className="flex h-[150vh] flex-col items-center justify-center">
//     //       <AnimatedText
//     //         once
//     //         text="Hello you"
//     //         el="h1"
//     //         className="text-[200px]"
//     //       />
//     //       Scroll down more...
//     //     </section>

//     //     <section className="flex min-h-[150vh] flex-col items-center justify-center">
//     //       <AnimatedText
//     //         el="h2"
//     //         text={[
//     //           "This is written on",
//     //           "a typing machine. Tick tick",
//     //           "tick tack tack...",
//     //         ]}
//     //         className="text-4xl"
//     //         repeatDelay={10000}
//     //       />
//     //     </section>
//     //   </div>
//     // </main>
//     <main>
//       <div>
//         <section>
//           <AnimatedText
//             once
//             text={t("imgHeader")}
//             el="h2"
//             className="text-center font-extrabold mb-[30px]"
//           />
//         </section>

//         <section>
//           <AnimatedText
//             once
//             el="h3"
//             text={t("imgTitle")}
//             repeatDelay={10000}
//             className="text-center font-extrabold"
//           />
//         </section>
//       </div>
//     </main>
//   );
// }

// export default FrontImgHead;
// import { useTranslations } from "next-intl";
// import { useLocale } from "next-intl";

// import AnimatedText from "../AnimatedText";
// import AnimatedTextArabic from "../AnimatedTextArabic";

// function FrontImgHead() {
//   const locale = useLocale();
//   const t = useTranslations("HomePage");

//   const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;

//   return (
//     <div>
//       <AnimatedComponent
//         once
//         text={t("imgHeader")}
//         el="h2"
//         className="text-center font-extrabold mb-[30px]"
//       />

//       <AnimatedComponent
//         once
//         el="h3"
//         text={t("imgTitle")}
//         repeatDelay={10000}
//         className="text-center font-extrabold"
//       />
//     </div>
//   );
// }

// export default FrontImgHead;

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import AnimatedText from "../AnimatedText";
import AnimatedTextArabic from "../AnimatedTextArabic";

function FrontImgHead({ translateName, header1, header2 }) {
  const locale = useLocale();
  const t = useTranslations(translateName);

  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;

  return (
    <div>
      <AnimatedComponent
        once
        text={t(`${header1}`)}
        el="h2"
        className="text-center font-extrabold mb-[30px]"
      />

      <AnimatedComponent
        once
        el="h3"
        text={t(`${header2}`)}
        repeatDelay={10000}
        className="text-center font-extrabold"
      />
    </div>
  );
}

export default FrontImgHead;
