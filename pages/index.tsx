import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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
  const [isSsr, setIsSsr] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsSsr(true);
  }, []);

  const onClickMoveToPage = (event: any) => {
    const login = localStorage.getItem("Token");
    const href = event.currentTarget.id;

    if (href !== "/todo") {
      if (href === "/signin") {
        login ? alert("로그인상태입니다. 로그아웃 후 진행해주세요") : router.push(href);
      } else {
        router.push(href);
      }
    }
    if (href == "/todo") {
      if (login) router.push(href);
      else alert("로그인해주세요");
    }
  };

  const onClickLogOut = () => {
    localStorage.removeItem("Token");
    alert("로그아웃 되었습니다.");
    router.push("/");
  };
  return isSsr ? (
    <Wrapper>
      <h1>Wanted Free OnBoarding</h1>
      <RouterWrapper>
        {!localStorage.getItem("Token") ? (
          <div style={{ cursor: "pointer" }} id="/login" onClick={onClickMoveToPage}>
            login
          </div>
        ) : (
          <div style={{ cursor: "pointer" }} onClick={onClickLogOut}>
            logOut
          </div>
        )}
        <div style={{ cursor: "pointer" }} id="/signin" onClick={onClickMoveToPage}>
          signin
        </div>
        <div style={{ cursor: "pointer" }} id="/todo" onClick={onClickMoveToPage}>
          TodoList
        </div>
      </RouterWrapper>
    </Wrapper>
  ) : (
    <div>loading</div>
  );
}
