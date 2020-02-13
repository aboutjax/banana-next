import styled from "styled-components";
import TopNavigation from "../nav";

const Contaner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-rows: 100px auto;
  overflow: auto;
`;

const Wrapper = ({ children }) => (
  <Contaner>
    <TopNavigation></TopNavigation>
    {children}
  </Contaner>
);

export default Wrapper;
