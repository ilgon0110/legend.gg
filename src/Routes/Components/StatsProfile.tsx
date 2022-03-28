import styled from "styled-components";

const Profile = styled.div`
  position: relative;
  width: 100%;
  height: 97%;
  margin-top: 8px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.silver};
  box-shadow: 0px 0px 6px #00000029;
`;
const Img = styled.div`
  position: relative;
  width: 170px;
  height: 227px;
  background: url("${process.env.PUBLIC_URL}img/stat_profile/ambition.png");
  background-repeat: no-repeat;
  background-size: cover;
  top: 8px;
  margin: 0 auto;
`;
const Logo = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background: url("${process.env.PUBLIC_URL}img/team_logo/Gen.G.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  top: 12px;
`;
const LogoName = styled.h1`
  position: relative;
  text-align: center;
  color: white;
  font-size: 12px;
  font-weight: 300;
  opacity: 0.7;
  top: 12px;
`;
const WinBar = styled.div`
  position: relative;
  margin: 0 auto;
  width: 228px;
  height: 24px;
  background: white;
  top: 32px;
`;
const WinRateBar = styled.div<{ winrate: number }>`
  position: relative;
  width: ${(props) => props.winrate}%;
  height: 24px;
  background: #7081f3;
`;
const WinRate = styled.h1`
  position: relative;
  text-align: center;
  top: 36px;
  font-size: 16px;
  font-weight: normal;
  color: white;
`;
const WinRateRank = styled.span`
  padding-left: 4px;
  font-size: 12px;
  font-weight: 300;
  opacity: 0.7;
`;
const Year = styled.h1`
  position: relative;
  text-align: center;
  top: 52px;
  font-size: 18px;
  font-weight: normal;
  color: white;
`;
const Season = styled.span`
  padding-left: 8px;
  font-size: 16px;
`;
const Chart = styled.div`
  position: relative;
  margin: 0 auto;
  width: 228px;
  height: 228px;
  background: pink;
  top: 60px;
`;

function StatsProfile() {
  return (
    <Profile>
      <Img></Img>
      <Logo></Logo>
      <LogoName>Gen.G</LogoName>
      <WinBar>
        <WinRateBar winrate={65}></WinRateBar>
      </WinBar>
      <WinRate>
        65%<WinRateRank>3rd</WinRateRank>
      </WinRate>
      <Year>
        2016<Season>Spring</Season>
      </Year>
      <Chart></Chart>
    </Profile>
  );
}
export default StatsProfile;
