import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  width: 50%;
  height: 50%;
  background: url("${process.env.PUBLIC_URL}/img/cat.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;
const Loading = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`;
const Text = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
`;
function DataYearError() {
  return (
    <Container>
      <Wrapper></Wrapper>
      <Loading>2013-2014년과 2015년 이후 지표는 비교가 불가능합니다!</Loading>
    </Container>
  );
}

export default DataYearError;
