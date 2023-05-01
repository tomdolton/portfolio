import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  const line1 = "<Tom Dolton";
  const line2 = "Web Developer />";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header
      className={`grid place-items-center h-screen relative mb-12 overflow-hidden`}
    >
      <Image
        className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 min-w-[1600px]"
        src="/banner-bg-masked.png"
        width={1260}
        height={600}
        alt=""
      />

      <div className="space-y-8 text-center relative">
        <motion.h1
          className="text-7xl"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}

          <br />

          {line2.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="text-3xl text-offwhite">
          FULL STACK WEB DEVELOPER <br />
          SPECIALISING IN FRONT END.
        </p>
      </div>
    </header>
  );
}
