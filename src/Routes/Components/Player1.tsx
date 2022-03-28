import styled from "styled-components";
import { data2013, data2015, playersId } from "../../data";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import NoData from "./NoData";
import PlayerNoData from "./PlayerNoData";

interface IplayerData {
  id: number;
  team: string;
  kda: number;
  kdaRank: number;
  kp: number;
  kpRank: number;
  dth: number;
  dthRank: number;
  gold: number;
  goldRank: number;
  winRate: number;
  winRateRank: number;
  gd10: number;
  gd10Rank: number;
  cs10: number;
  cs10Rank: number;
  dpm: number;
  dpmRank: number;
  dmg: number;
  dmgRank: number;
  groupRank: number;
  playoffRank: number;
  pogpoint: number;
  pogpointRank: number;
}

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
const Logo = styled.div<{ t: string | undefined }>`
  position: relative;
  width: 32px;
  height: 32px;
  background: url("${process.env.PUBLIC_URL}/img/team_logo/${(a) => a.t}.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;
const LogoName = styled.h1`
  position: relative;
  text-align: center;
  color: white;
  font-size: 12px;
  font-weight: 300;
  opacity: 0.7;
  margin-bottom: 8px;
`;
const DarkBlue = styled.div`
  position: relative;
  background: #0a2742;
  border-radius: 12px;
  width: 100%;
  height: 222px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  color: white;
  margin-bottom: 4px;
`;
const DarkBlueItem = styled.div`
  position: relative;
  width: 33%;
  text-align: center;
  grid-column: span 1;
`;
const Score = styled.h1`
  margin-bottom: 2px;
  color: ${(props) => props.theme.mint};
  font-weight: 600;
`;
const Nth = styled.h1`
  font-size: 12px;
  opacity: 0.7;
  margin-bottom: 10px;
  font-weight: lighter;
`;
const Title = styled.h1`
  font-size: 12px;
`;
const Years = styled.span`
  position: relative;
  color: white;
  padding-right: 12px;
`;
const Seasons = styled.span`
  position: relative;
  color: white;
`;

function Player1({
  findName,
  findYears,
  findSeasons,
}: {
  findName: string;
  findYears: string;
  findSeasons: string;
}) {
  const [dataCheck, setDataCheck] = useState(true);
  const [dataIndex, setDataIndex] = useState(0);
  const history = useNavigate();
  const playerData: IplayerData[] = [
    data2013.results[0][2013].spring[findName],
    data2013.results[0][2013].summer[findName],
    data2013.results[0][2013].world[findName],
    data2013.results[1][2014].spring[findName],
    data2013.results[1][2014].summer[findName],
    data2013.results[1][2014].world[findName],
    data2015.results[0][2015].spring[findName],
    data2015.results[0][2015].summer[findName],
    data2015.results[0][2015].world[findName],
    data2015.results[1][2016].spring[findName],
    data2015.results[1][2016].summer[findName],
    data2015.results[1][2016].world[findName],
    data2015.results[2][2017].spring[findName],
    data2015.results[2][2017].summer[findName],
    data2015.results[2][2017].world[findName],
    data2015.results[3][2018].spring[findName],
    data2015.results[3][2018].summer[findName],
    data2015.results[3][2018].world[findName],
    data2015.results[4][2019].spring[findName],
    data2015.results[4][2019].summer[findName],
    data2015.results[4][2019].world[findName],
    data2015.results[5][2020].spring[findName],
    data2015.results[5][2020].summer[findName],
    data2015.results[5][2020].world[findName],
    data2015.results[6][2021].spring[findName],
    data2015.results[6][2021].summer[findName],
    data2015.results[6][2021].world[findName],
  ];
  const setPlayerData = () => {
    if (findYears === "2013" && findSeasons === "Spring") {
      setDataIndex(0);
    } else if (findYears === "2013" && findSeasons === "Summer") {
      setDataIndex(1);
    } else if (findYears === "2013" && findSeasons === "World") {
      setDataIndex(2);
    } else if (findYears === "2014" && findSeasons === "Spring") {
      setDataIndex(3);
    } else if (findYears === "2014" && findSeasons === "Summer") {
      setDataIndex(4);
    } else if (findYears === "2014" && findSeasons === "World") {
      setDataIndex(5);
    } else if (findYears === "2015" && findSeasons === "Spring") {
      setDataIndex(6);
    } else if (findYears === "2015" && findSeasons === "Summer") {
      setDataIndex(7);
    } else if (findYears === "2015" && findSeasons === "World") {
      setDataIndex(8);
    } else if (findYears === "2016" && findSeasons === "Spring") {
      setDataIndex(9);
    } else if (findYears === "2016" && findSeasons === "Summer") {
      setDataIndex(10);
    } else if (findYears === "2016" && findSeasons === "World") {
      setDataIndex(11);
    } else if (findYears === "2017" && findSeasons === "Spring") {
      setDataIndex(12);
    } else if (findYears === "2017" && findSeasons === "Summer") {
      setDataIndex(13);
    } else if (findYears === "2017" && findSeasons === "World") {
      setDataIndex(14);
    } else if (findYears === "2018" && findSeasons === "Spring") {
      setDataIndex(15);
    } else if (findYears === "2018" && findSeasons === "Summer") {
      setDataIndex(16);
    } else if (findYears === "2018" && findSeasons === "World") {
      setDataIndex(17);
    } else if (findYears === "2019" && findSeasons === "Spring") {
      setDataIndex(18);
    } else if (findYears === "2019" && findSeasons === "Summer") {
      setDataIndex(19);
    } else if (findYears === "2019" && findSeasons === "World") {
      setDataIndex(20);
    } else if (findYears === "2020" && findSeasons === "Spring") {
      setDataIndex(21);
    } else if (findYears === "2020" && findSeasons === "Summer") {
      setDataIndex(22);
    } else if (findYears === "2020" && findSeasons === "World") {
      setDataIndex(23);
    } else if (findYears === "2021" && findSeasons === "Spring") {
      setDataIndex(24);
    } else if (findYears === "2021" && findSeasons === "Summer") {
      setDataIndex(25);
    } else if (findYears === "2021" && findSeasons === "World") {
      setDataIndex(26);
    }
  };
  useEffect(() => {
    setPlayerData();
    console.log("setPlayerData 실행");
    console.log(playerData[dataIndex]);
    if (playerData[dataIndex].winRate === undefined) {
      setDataCheck(false);
    } else {
      setDataCheck(true);
    }
  }, [setPlayerData]);
  const backCompared = () => {
    history(`/compared`);
  };

  return dataCheck ? (
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
      <Profile bg={findName} />
      <Logo t={playerData[dataIndex].team} />
      <LogoName>{playerData[dataIndex].team}</LogoName>
      <DarkBlue>
        <DarkBlueItem>
          <Score>{playerData[dataIndex].winRate}</Score>
          <Nth>
            {playerData[dataIndex].winRateRank === 1
              ? `${playerData[dataIndex].winRateRank}st`
              : playerData[dataIndex].winRateRank === 2
              ? `${playerData[dataIndex].winRateRank}nd`
              : playerData[dataIndex].winRateRank === 3
              ? `${playerData[dataIndex].winRateRank}rd`
              : `${playerData[dataIndex].winRateRank}th`}
          </Nth>
          <Title>WIN%</Title>
        </DarkBlueItem>
        <DarkBlueItem>
          <Score>{playerData[dataIndex].kda}</Score>
          <Nth>
            {playerData[dataIndex].kdaRank === 1
              ? `${playerData[dataIndex].kdaRank}st`
              : playerData[dataIndex].kdaRank === 2
              ? `${playerData[dataIndex].kdaRank}nd`
              : playerData[dataIndex].kdaRank === 3
              ? `${playerData[dataIndex].kdaRank}rd`
              : `${playerData[dataIndex].kdaRank}th`}
          </Nth>
          <Title>KDA</Title>
        </DarkBlueItem>
        <DarkBlueItem>
          <Score>
            {dataIndex < 6
              ? playerData[dataIndex].kp
              : playerData[dataIndex].gd10}
          </Score>
          {dataIndex < 6 ? (
            <Nth>
              {playerData[dataIndex].kpRank === 1
                ? `${playerData[dataIndex].kpRank}st`
                : playerData[dataIndex].kpRank === 2
                ? `${playerData[dataIndex].kpRank}nd`
                : playerData[dataIndex].kpRank === 3
                ? `${playerData[dataIndex].kpRank}rd`
                : `${playerData[dataIndex].kpRank}th`}
            </Nth>
          ) : (
            <Nth>
              {playerData[dataIndex].gd10Rank === 1
                ? `${playerData[dataIndex].gd10Rank}st`
                : playerData[dataIndex].gd10Rank === 2
                ? `${playerData[dataIndex].gd10Rank}nd`
                : playerData[dataIndex].gd10Rank === 3
                ? `${playerData[dataIndex].gd10Rank}rd`
                : `${playerData[dataIndex].gd10Rank}th`}
            </Nth>
          )}
          <Title>{dataIndex < 6 ? "KP%" : "GD@10"}</Title>
        </DarkBlueItem>
        <DarkBlueItem>
          <Score>
            {dataIndex < 6
              ? playerData[dataIndex].dth
              : playerData[dataIndex].cs10}
          </Score>
          {dataIndex < 6 ? (
            <Nth>
              {playerData[dataIndex].dthRank === 1
                ? `${playerData[dataIndex].dthRank}st`
                : playerData[dataIndex].dthRank === 2
                ? `${playerData[dataIndex].dthRank}nd`
                : playerData[dataIndex].dthRank === 3
                ? `${playerData[dataIndex].dthRank}rd`
                : `${playerData[dataIndex].dthRank}th`}
            </Nth>
          ) : (
            <Nth>
              {playerData[dataIndex].cs10Rank === 1
                ? `${playerData[dataIndex].cs10Rank}st`
                : playerData[dataIndex].cs10Rank === 2
                ? `${playerData[dataIndex].cs10Rank}nd`
                : playerData[dataIndex].cs10Rank === 3
                ? `${playerData[dataIndex].cs10Rank}rd`
                : `${playerData[dataIndex].cs10Rank}th`}
            </Nth>
          )}
          <Title>{dataIndex < 6 ? "DTH%" : "CS@10"}</Title>
        </DarkBlueItem>
        <DarkBlueItem>
          <Score>
            {dataIndex < 6
              ? `${playerData[dataIndex].gold}%`
              : playerData[dataIndex].dpm}
          </Score>
          {dataIndex < 6 ? (
            <Nth>
              {playerData[dataIndex].goldRank === 1
                ? `${playerData[dataIndex].goldRank}st`
                : playerData[dataIndex].goldRank === 2
                ? `${playerData[dataIndex].goldRank}nd`
                : playerData[dataIndex].goldRank === 3
                ? `${playerData[dataIndex].goldRank}rd`
                : `${playerData[dataIndex].goldRank}th`}
            </Nth>
          ) : (
            <Nth>
              {playerData[dataIndex].dpmRank === 1
                ? `${playerData[dataIndex].dpmRank}st`
                : playerData[dataIndex].dpmRank === 2
                ? `${playerData[dataIndex].dpmRank}nd`
                : playerData[dataIndex].dpmRank === 3
                ? `${playerData[dataIndex].dpmRank}rd`
                : `${playerData[dataIndex].dpmRank}th`}
            </Nth>
          )}
          <Title>{dataIndex < 6 ? "GOLD%" : "DPM"}</Title>
        </DarkBlueItem>
        <DarkBlueItem>
          <Score>
            {dataIndex < 6
              ? `${playerData[dataIndex].winRate}%`
              : `${playerData[dataIndex].dmg}%`}
          </Score>
          {dataIndex < 6 ? (
            <Nth>
              {playerData[dataIndex].winRateRank === 1
                ? `${playerData[dataIndex].winRateRank}st`
                : playerData[dataIndex].winRateRank === 2
                ? `${playerData[dataIndex].winRateRank}nd`
                : playerData[dataIndex].winRateRank === 3
                ? `${playerData[dataIndex].winRateRank}rd`
                : `${playerData[dataIndex].winRateRank}th`}
            </Nth>
          ) : (
            <Nth>
              {playerData[dataIndex].dmgRank === 1
                ? `${playerData[dataIndex].dmgRank}st`
                : playerData[dataIndex].dmgRank === 2
                ? `${playerData[dataIndex].dmgRank}nd`
                : playerData[dataIndex].dmgRank === 3
                ? `${playerData[dataIndex].dmgRank}rd`
                : `${playerData[dataIndex].dmgRank}th`}
            </Nth>
          )}
          <Title>{dataIndex < 6 ? "WINRATE%" : "DMG%"}</Title>
        </DarkBlueItem>
      </DarkBlue>
      <Years>{findYears}</Years>
      <Seasons>{findSeasons}</Seasons>
    </>
  ) : (
    <PlayerNoData name={findName} year={findYears} season={findSeasons} />
  );
}

export default Player1;
