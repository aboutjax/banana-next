import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StatIconOne, StatIconTwo, StatIconThree, StatIconFour } from "./icons";

const perspectiveValue = "400px";

const childrenVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "beforeChildren",
      delayChildren: 0.3
    }
  },
  hide: { y: 20, opacity: 0 }
};

const StatCardYellow = styled(motion.div)`
  perspective: ${perspectiveValue};
  min-height: 400px;
  overflow: hidden;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    ${props => props.theme.colors.statCardBackgroundYellow};
`;

const StatCardRed = styled(motion.div)`
  perspective: ${perspectiveValue};
  min-height: 400px;
  overflow: hidden;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    ${props => props.theme.colors.statCardBackgroundRed};
`;

const StatCardBlack = styled(motion.div)`
  perspective: ${perspectiveValue};
  min-height: 400px;
  overflow: hidden;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.tokens.color.white.value};
  justify-content: center;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    ${props => props.theme.colors.statCardBackgroundBlack};
`;

const StatCardGreen = styled(motion.div)`
  perspective: ${perspectiveValue};
  min-height: 400px;
  overflow: hidden;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    ${props => props.theme.colors.statCardBackgroundGreen};
`;

const StatCardBeige = styled(motion.div)`
  perspective: ${perspectiveValue};
  min-height: 400px;
  overflow: hidden;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    ${props => props.theme.colors.statCardBackgroundBeige};
`;

const StatCardPurple = styled(motion.div)`
  perspective: ${perspectiveValue};
  min-height: 400px;
  overflow: hidden;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    ${props => props.theme.colors.statCardBackgroundPurple};
`;

const StatCardInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    margin: 0;
    margin-top: ${props => props.theme.tokens.spacing.XL.value};
  }

  h5 {
    margin-top: ${props => props.theme.tokens.spacing.S.value};
  }
`;

const variants = {
  hide: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export const StatCard = props => {
  if (props.type == 1) {
    return (
      <StatCardYellow
        key={props.label}
        variants={childrenVariants}
        exit={{ opacity: 0 }}
      >
        <StatIconTwo />
        <StatCardInfo initial={"hide"} variants={variants}>
          <h2>
            {props.value} {props.unit}
          </h2>
          <h5>{props.label}</h5>
        </StatCardInfo>
      </StatCardYellow>
    );
  } else if (props.type == 2) {
    return (
      <StatCardRed
        key={props.label}
        variants={childrenVariants}
        initial={"hide"}
        exit={{ opacity: 0 }}
      >
        <StatIconThree />
        <StatCardInfo initial={"hide"} variants={variants}>
          <h2>
            {props.value} {props.unit}
          </h2>
          <h5>{props.label}</h5>
        </StatCardInfo>
      </StatCardRed>
    );
  } else if (props.type == 3) {
    return (
      <StatCardBlack
        key={props.label}
        variants={childrenVariants}
        initial={"hide"}
        exit={{ opacity: 0 }}
      >
        <StatIconThree />
        <StatCardInfo initial={"hide"} variants={variants}>
          <h2>
            {props.value} {props.unit}
          </h2>
          <h5>{props.label}</h5>
        </StatCardInfo>
      </StatCardBlack>
    );
  } else if (props.type == 4) {
    return (
      <StatCardGreen
        key={props.label}
        variants={childrenVariants}
        initial={"hide"}
        exit={{ opacity: 0 }}
      >
        <StatIconFour />
        <StatCardInfo initial={"hide"} variants={variants}>
          <h2>
            {props.value} {props.unit}
          </h2>
          <h5>{props.label}</h5>
        </StatCardInfo>
      </StatCardGreen>
    );
  } else if (props.type == 5) {
    return (
      <StatCardPurple
        key={props.label}
        variants={childrenVariants}
        initial={"hide"}
        exit={{ opacity: 0 }}
      >
        <StatIconOne />
        <StatCardInfo initial={"hide"} variants={variants}>
          <h2>
            {props.value} {props.unit}
          </h2>
          <h5>{props.label}</h5>
        </StatCardInfo>
      </StatCardPurple>
    );
  } else if (props.type == 6) {
    return (
      <StatCardBeige
        key={props.label}
        variants={childrenVariants}
        initial={"hide"}
        exit={{ opacity: 0 }}
      >
        <StatIconThree />
        <StatCardInfo initial={"hide"} variants={variants}>
          <h2>
            {props.value} {props.unit}
          </h2>
          <h5>{props.label}</h5>
        </StatCardInfo>
      </StatCardBeige>
    );
  }
};
