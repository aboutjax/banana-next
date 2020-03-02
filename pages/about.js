import styled from "styled-components";
import { IconStravaConnect } from "../components/icons/icons";

let LoginPage = styled.div`
  display: grid;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

let LoginButton = styled.a`
  place-self: center;
  align-self: center;
  justify-self: center;
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
