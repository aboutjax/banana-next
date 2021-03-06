import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkeletonCard = styled(motion.div)`
  width: 100%;
  height: 150px;
  opacity: 1;
  opacity: 0.5;
  margin-top: ${props => props.theme.tokens.spacing.XL.value};
  padding: ${props => props.theme.tokens.spacing.XXL.value};
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.tokens.borderRadius.value};

  &:first-of-type {
    margin-top: 0;
  }
`;

const Stack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StackVariants = {
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.3 }
  },
  hide: { opacity: 0.5 }
};

const SkeletonVariants = {
  show: { opacity: 1 },
  hide: { opacity: 0.5 }
};

const SkeletonTransition = {
  yoyo: Infinity
};

function Skeleton(props) {
  return (
    <Stack animate={"show"} variants={StackVariants}>
      <SkeletonCard
        variants={SkeletonVariants}
        animate={"show"}
        transition={{ duration: 0.6, yoyo: Infinity, delay: 0.1 }}
      ></SkeletonCard>
      <SkeletonCard
        variants={SkeletonVariants}
        animate={"show"}
        transition={{ duration: 0.6, yoyo: Infinity, delay: 0.2 }}
      ></SkeletonCard>
      <SkeletonCard
        variants={SkeletonVariants}
        animate={"show"}
        transition={{ duration: 0.6, yoyo: Infinity, delay: 0.3 }}
      ></SkeletonCard>
      <SkeletonCard
        variants={SkeletonVariants}
        animate={"show"}
        transition={{ duration: 0.6, yoyo: Infinity, delay: 0.4 }}
      ></SkeletonCard>
      <SkeletonCard
        variants={SkeletonVariants}
        animate={"show"}
        transition={{ duration: 0.6, yoyo: Infinity, delay: 0.5 }}
      ></SkeletonCard>
    </Stack>
  );
}

export default Skeleton;
