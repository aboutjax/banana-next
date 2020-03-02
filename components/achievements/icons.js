import { motion } from "framer-motion";

let variants = {
  hide: { opacity: 0, y: 800, rotateY: 360, rotate: 180, rotateX: 270 },
  show: {
    rotateX: 0,
    rotateY: 0,
    rotate: 0,
    opacity: 1,
    y: 0,
    transition: {
      rotateY: {
        duration: 1,
        ease: "easeInOut"
      },
      opacity: { duration: 1 },
      type: "spring",
      stiffness: 100,
      damping: 70
      // when: "beforeChildren"
    }
  }
};

let variantsTwo = {
  hide: { opacity: 0, y: 20, scale: 0.1, rotate: 45 },
  show: {
    rotate: 0,
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1.1,
      opacity: {
        duration: 0.2
      },
      rotate: {
        duration: 0.4,
        ease: "easeInOut"
      },

      type: "spring",
      stiffness: 400,
      damping: 20
    }
  }
};

export const StatIconOne = () => {
  return (
    <motion.svg
      variants={variants}
      width="121"
      height="120"
      viewBox="0 0 121 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        // variants={variantsTwo}
        d="M0.5 0H120.5V120H0.5V0Z"
        fill="#292524"
      />
      <motion.rect
        // variants={variantsTwo}
        x="27.3966"
        y="26.8966"
        z="30"
        width="66.2069"
        height="66.2069"
        fill="#FFC55F"
      />
      <motion.circle
        variants={variantsTwo}
        cx="60.5"
        cy="60"
        r="17.069"
        fill="#DC524D"
      />
    </motion.svg>
  );
};

export const StatIconTwo = () => {
  return (
    <motion.svg
      variants={variants}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path d="M0 0H120V120H0V0Z" fill="#292524" />
        <motion.circle
          variants={variantsTwo}
          cx="60"
          cy="60.0001"
          r="29.4828"
          fill="#FFC55F"
        />
        <motion.path
          d="M0 120.088L120 0V120H37.2414L0 120.088Z"
          fill="#DC524D"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H120V120H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const StatIconThree = () => {
  return (
    <motion.svg
      variants={variants}
      width="121"
      height="120"
      viewBox="0 0 121 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <motion.path
          variants={variantsTwo}
          d="M0.5 0H120.5V120H0.5V0Z"
          fill="#292524"
        />
        <motion.path
          //   variants={variantsTwo}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.5 120H49.1207C49.1207 80.5783 81.0783 48.6207 120.5 48.6207V0C54.2258 0 0.5 53.7258 0.5 120Z"
          fill="#FFC55F"
        />
        <motion.path
          //   variants={variantsTwo}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M120.5 48.6207V120L49.1206 120C49.1206 80.5783 81.0782 48.6207 120.5 48.6207C120.5 48.6207 120.5 48.6207 120.5 48.6207Z"
          fill="#292524"
        />
      </g>
      <defs>
        <motion.clipPath id="clip0">
          <path d="M0.5 0H120.5V120H0.5V0Z" fill="white" />
        </motion.clipPath>
      </defs>
    </motion.svg>
  );
};

export const StatIconFour = () => {
  return (
    <motion.svg
      variants={variants}
      width="121"
      height="115"
      viewBox="0 0 121 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variantsTwo}
        d="M0.5 0H120.5V120H0.5V0Z"
        fill="#DC524D"
      />
      <motion.circle cx="60.5003" cy="91.0342" r="9.31034" fill="#292524" />
      <motion.circle cx="60.5003" cy="59.9998" r="9.31034" fill="#292524" />
      <motion.circle cx="29.4656" cy="59.9998" r="9.31034" fill="#292524" />
      <motion.circle cx="29.4656" cy="91.0342" r="9.31034" fill="#292524" />
      <motion.circle cx="91.5345" cy="91.0342" r="9.31034" fill="#292524" />
      <motion.circle cx="91.5345" cy="59.9998" r="9.31034" fill="#292524" />
      <motion.circle cx="91.5345" cy="28.9654" r="9.31034" fill="#292524" />
      <motion.circle cx="60.5003" cy="28.9654" r="9.31034" fill="#292524" />
      <motion.circle cx="29.4656" cy="28.9654" r="9.31034" fill="#292524" />
    </motion.svg>
  );
};
