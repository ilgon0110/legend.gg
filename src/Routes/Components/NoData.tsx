import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  margin-bottom: -5%;
  width: 50%;
  height: 50%;
  background: url("${process.env.PUBLIC_URL}/img/teemo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
`;
const Loading = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 16px;
`;
const Text = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
`;
function NoData({ year, season }: { year: string; season: string }) {
  return (
    <>
      <Wrapper></Wrapper>
      <Loading>
        {year}년 {season}의 지표가 없습니다!
      </Loading>
      <Text>지표 도입시기 - LPL, LCS : 18시즌</Text>
    </>
  );
}

export default NoData;
