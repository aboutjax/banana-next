import styled from "styled-components";
import React from "react";
import TopNavigation from "../nav";
import SubNav from "../../components/subnav";
import { AnimatePresence, motion } from "framer-motion";
import { useCookies } from "react-cookie";

const Container = styled(motion.div)`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr minmax(auto, 100%) 1fr;
  position: absolute;
  min-height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Wrapper = ({ children, props }) => {
  const [cookies] = useCookies([]);
  const [user, setUser] = React.useState({});

  let access_token = cookies.access_token;

  let authState;

  if (props === undefined) {
    authState = false;
  } else if (props.auth === true) {
    authState = true;
  } else {
    authState = false;
  }

  // Do this if you want page transitions
  const variants = {
    out: { opacity: 0, y: 0, transition: { duration: 1 } },
    in: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
    initial: { opacity: 0, y: 0, transition: { duration: 1 } }
  };

  return (
    <Container>
      <TopNavigation user={user} auth={authState}></TopNavigation>
      {children}
    </Container>
  );
};

Wrapper.getInitialProps = async () => {
  return {};
};

export default Wrapper;
