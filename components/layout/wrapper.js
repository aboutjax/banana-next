import { Children } from "react";
import styled from "styled-components";

const Contaner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
`;

const Wrapper = ({ children }) => <Contaner>{children}</Contaner>;

export default Wrapper;
