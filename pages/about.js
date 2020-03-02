import styled from "styled-components";
import { IconStravaConnect } from "../components/icons/icons";

let LoginPage = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

let LoginButton = styled.a`
  place-self: center;
  cursor: pointer;
`;
const style = {};
function About() {
  return (
    <LoginPage>
      <LoginButton>
        <a href={process.env.LOGIN_URL}>
          <IconStravaConnect />
        </a>
      </LoginButton>
    </LoginPage>
  );
}

export default About;
