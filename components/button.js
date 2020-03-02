import styled from "styled-components";
import { motion } from "framer-motion";
import { whileHover, whileTap } from "../interactions/cursor";

const StyledButton = styled(motion.div)`
  padding: ${props => props.theme.tokens.spacing.M.value}
    ${props => props.theme.tokens.spacing.L.value};
  font-weight: 600;
  background: ${props => props.theme.colors.buttonBackground}};
  display: inline-block;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  color: ${props => props.theme.colors.buttonLabel}};
  text-transform: uppercase;
  cursor: pointer;

  p {
    margin: 0;
  }
`;

export const Button = props => {
  let handleClick;
  if (props.onClick) {
    handleClick = () => {
      props.onClick();
    };
  }
  return (
    <StyledButton
      onClick={handleClick}
      whileTap={whileTap}
      whileHover={whileHover}
    >
      <p>{props.label}</p>
    </StyledButton>
  );
};
