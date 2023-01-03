import "../styles/globals.css";
import styled from "@emotion/styled";

// styles
const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
`;
const Body = styled.div`
  border: 1px solid #bdbdbd;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Body>
        <Component {...pageProps} />
      </Body>
    </Wrapper>
  );
}

export default MyApp;
