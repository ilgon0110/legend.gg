import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("${process.env.PUBLIC_URL}img/honeybee.png");
  background-repeat: no-repeat;
  background-position: center;
`;
const Loading = styled.h1`
  color: #fadc44;
  padding-top: 400px;
  font-size: 32px;
  font-weight: 600;
`;

function Loader() {
  return (
    <Wrapper>
      <Loading>Loading...</Loading>
    </Wrapper>
  );
}

export default Loader;
