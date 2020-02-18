import styled from "styled-components";
import TopNavigation from "../nav";
import cookies from "next-cookies";

const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr minmax(auto, 960px) 1fr;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Wrapper = ({ children, props }) => {
  console.log(props);

  let authState;

  if (props === undefined) {
    authState = false;
  } else if (props.auth === true) {
    authState = true;
  } else {
    authState = false;
  }

  return (
    <Container>
      <TopNavigation auth={authState}></TopNavigation>
      {children}
    </Container>
  );
};

Wrapper.getInitialProps = async () => {
  return {};
};

export default Wrapper;
