import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: -56px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 6px #00000029;
  svg {
    width: 25px;
    height: 25px;
  }
`;
const Profile = styled.div<{ bg: string }>`
  position: relative;
  background: url("${process.env.PUBLIC_URL}/img/profile/${(a) => a.bg}.png");
  background-size: cover;
  width: 170px;
  height: 227px;
  margin: 0 auto;
`;
const Text = styled.h1`
  margin-top: 8px;
  color: white;
`;
const Text2 = styled.h1`
  margin-top: 8px;
  font-size: 14px;
  color: white;
  opacity: 0.7;
`;
function PlayerNoData({
  name,
  year,
  season,
}: {
  name: string;
  year: string;
  season: string;
}) {
  const history = useNavigate();
  const backCompared = () => {
    history("");
  };

  return (
    <>
      <Button onClick={backCompared}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
        >
          <g>
            <path d="M864.2,559.6c0,201.3-162.9,364.2-364.2,364.2S135.8,760.9,135.8,559.6c0-201.3,162.9-364.2,364.2-364.2c25.2,0,49,2.6,72.8,7.9l-94,94l46.4,46.4L692,176.9L525.2,10l-46.4,46.4l76.8,76.8c-18.5-1.3-37.1-4-55.6-4c-237.1,0-430.4,193.4-430.4,430.4C69.6,796.6,262.9,990,500,990c237.1,0,430.4-193.4,430.4-430.4H864.2z" />
          </g>
        </svg>
      </Button>
      <Profile bg={name}></Profile>
      <Text>
        {year}년 {season}의 데이터가 없습니다
      </Text>
      <Text2>지표 도입시기 - LPL, LCS : 18시즌</Text2>
    </>
  );
}

export default PlayerNoData;
