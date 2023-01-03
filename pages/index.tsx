import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

// styles
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const RouterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 32px;
`;

export default function Home() {
  const router = useRouter();
  const onClickMoveToPage = (event: any) => {
    router.push(event.currentTarget.id);
  };
  return (
    <Wrapper>
      <h1>Wanted Free OnBoarding</h1>
      <RouterWrapper>
        <div style={{ cursor: "pointer" }} id="/login" onClick={onClickMoveToPage}>
          login
        </div>
        <div id="/signin" onClick={onClickMoveToPage}>
          signin
        </div>
      </RouterWrapper>
    </Wrapper>
  );
}
