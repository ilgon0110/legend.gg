import styled from "styled-components";
import { data2013, data2015, playersId, playersText } from "../../../data";
import { useMatch, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NoData from "../NoData";
import ApexChart from "react-apexcharts";

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

interface Iplayers {
  name: string;
  id: number;
}

interface IChartData {
  x: string;
  y: number | null;
}

const Container = styled.div`
  width: 1194px;
  height: 100vh;
  overflow: hidden;
  display: grid;
  gap: 30px;
  margin: 0 auto;
  padding-top: 56px;
  grid-template-columns: repeat(12, 1fr);
  div:first-child {
    grid-column: 1/4;
  }
  div:last-child {
    grid-column: 4/13;
  }
`;
const Item = styled.div`
  position: relative;
`;
const Profile = styled.div`
  position: relative;
  width: 100%;
  height: 97%;
  margin-top: 8px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.silver};
  box-shadow: 0px 0px 6px #00000029;
`;
const Img = styled.img`
  position: relative;
  display: block;
  width: 170px;
  height: 227px;
  top: 8px;
  margin: 0 auto;
`;
const Logo = styled.img`
  position: relative;
  display: block;
  width: 32px;
  height: 32px;
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
const WinRateBar = styled.div<{ winrate: number | undefined }>`
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
  top: 60px;
`;
const YearSelect = styled.select`
  margin-top: 8px;
  color: white;
  border: none;
  background: transparent;
  font-size: 24px;
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
  option {
    display: block;
    background-color: rgba(0, 0, 0, 0);
    color: blue;
  }
`;
const SeasonSelect = styled.span<{ opacity: number }>`
  font-size: 20px;
  color: white;
  padding: 32px;
  font-weight: normal;
  opacity: ${(props) => props.opacity};
  &:hover {
    cursor: pointer;
  }
`;
const StatBox = styled.div`
  position: relative;
  width: 100%;
  height: 182px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 182px;
  background: #0a2742;
  border-radius: 12px;
  top: 16px;
  color: white;
  align-items: center;
  div {
    position: relative;
    text-align: center;
    h1:first-child {
      font-size: 32px;
      color: ${(props) => props.theme.mint};
      font-weight: 600;
      padding-bottom: 4px;
    }
    h1:nth-child(2) {
      font-size: 20px;
      font-weight: 300;
      opacity: 0.8;
      padding-bottom: 20px;
    }
    h1:last-child {
      font-size: 20px;
    }
    &:first-child {
      grid-column: span 1;
    }
    &:last-child {
      grid-column: span 1;
    }
  }
`;
const CareerText = styled.h1`
  position: relative;
  color: white;
  top: 120px;
  font-size: 20px;
`;
const CareerBox = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 212px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 212px;
  gap: 30px;
  color: white;
  text-align: center;
  div {
    position: relative;
    top: 135px;
    border-radius: 12px;
    font-size: 20px;
    h1:first-child {
      margin-top: 60px;
      font-size: 32px;
      color: ${(props) => props.theme.mint};
      font-weight: 600;
      padding-bottom: 4px;
    }
    h1:last-child {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:first-child {
      grid-column: span 1;
    }
    &:last-child {
      grid-column: span 1;
    }
    background: #0a2742;
  }
`;
const PlayerSaying = styled.h1`
  position: relative;
  color: white;
  text-align: center;
  top: 50px;
  font-size: 16px;
  opacity: 0.8;
  font-style: italic;
`;

function Stats() {
  const [dataIndex, setDataIndex] = useState(0);
  const [values, setValues] = useState("2013");
  const [seasons, setSeasons] = useState("Spring");
  const [springOpacity, setSpringOpacity] = useState(0.5);
  const [summerOpacity, setSummerOpacity] = useState(0.5);
  const [worldOpacity, setWorldOpacity] = useState(0.5);
  const selectValues = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ];
  const playerId = useMatch("stats/:id");
  const id = playerId?.params.id ? parseInt(playerId.params.id) : 960507;
  const playersName = Object.keys(data2013.results[0][2013].spring);
  const playersKey = Object.values(playersId).map((id) => id.id);
  const players: Iplayers[] = playersKey.map((b, index) => {
    return {
      name: playersName[index],
      id: b,
    };
  });
  const newPlayer = players.map((a) => (id === a.id ? a.name : null));
  const newPlayerName = newPlayer.find((element) => element !== null);
  const playerData: IplayerData[] = [
    data2013.results[0][2013].spring[newPlayerName ? newPlayerName : ""],
    data2013.results[0][2013].summer[newPlayerName ? newPlayerName : ""],
    data2013.results[0][2013].world[newPlayerName ? newPlayerName : ""],
    data2013.results[1][2014].spring[newPlayerName ? newPlayerName : ""],
    data2013.results[1][2014].summer[newPlayerName ? newPlayerName : ""],
    data2013.results[1][2014].world[newPlayerName ? newPlayerName : ""],
    data2015.results[0][2015].spring[newPlayerName ? newPlayerName : ""],
    data2015.results[0][2015].summer[newPlayerName ? newPlayerName : ""],
    data2015.results[0][2015].world[newPlayerName ? newPlayerName : ""],
    data2015.results[1][2016].spring[newPlayerName ? newPlayerName : ""],
    data2015.results[1][2016].summer[newPlayerName ? newPlayerName : ""],
    data2015.results[1][2016].world[newPlayerName ? newPlayerName : ""],
    data2015.results[2][2017].spring[newPlayerName ? newPlayerName : ""],
    data2015.results[2][2017].summer[newPlayerName ? newPlayerName : ""],
    data2015.results[2][2017].world[newPlayerName ? newPlayerName : ""],
    data2015.results[3][2018].spring[newPlayerName ? newPlayerName : ""],
    data2015.results[3][2018].summer[newPlayerName ? newPlayerName : ""],
    data2015.results[3][2018].world[newPlayerName ? newPlayerName : ""],
    data2015.results[4][2019].spring[newPlayerName ? newPlayerName : ""],
    data2015.results[4][2019].summer[newPlayerName ? newPlayerName : ""],
    data2015.results[4][2019].world[newPlayerName ? newPlayerName : ""],
    data2015.results[5][2020].spring[newPlayerName ? newPlayerName : ""],
    data2015.results[5][2020].summer[newPlayerName ? newPlayerName : ""],
    data2015.results[5][2020].world[newPlayerName ? newPlayerName : ""],
    data2015.results[6][2021].spring[newPlayerName ? newPlayerName : ""],
    data2015.results[6][2021].summer[newPlayerName ? newPlayerName : ""],
    data2015.results[6][2021].world[newPlayerName ? newPlayerName : ""],
  ];
  const springClicked = () => {
    values === "2013" && setDataIndex(0);
    values === "2014" && setDataIndex(3);
    values === "2015" && setDataIndex(6);
    values === "2016" && setDataIndex(9);
    values === "2017" && setDataIndex(12);
    values === "2018" && setDataIndex(15);
    values === "2019" && setDataIndex(18);
    values === "2020" && setDataIndex(21);
    values === "2021" && setDataIndex(24);
    setSeasons("Spring");
  };
  const summerClicked = () => {
    values === "2013" && setDataIndex(1);
    values === "2014" && setDataIndex(4);
    values === "2015" && setDataIndex(7);
    values === "2016" && setDataIndex(10);
    values === "2017" && setDataIndex(13);
    values === "2018" && setDataIndex(16);
    values === "2019" && setDataIndex(19);
    values === "2020" && setDataIndex(22);
    values === "2021" && setDataIndex(25);
    setSeasons("Summer");
  };
  const worldClicked = () => {
    values === "2013" && setDataIndex(2);
    values === "2014" && setDataIndex(5);
    values === "2015" && setDataIndex(8);
    values === "2016" && setDataIndex(11);
    values === "2017" && setDataIndex(14);
    values === "2018" && setDataIndex(17);
    values === "2019" && setDataIndex(20);
    values === "2020" && setDataIndex(23);
    values === "2021" && setDataIndex(26);
    setSeasons("Worlds");
  };

  const handleSelect = (event: any) => {
    setValues(event.target.value);
  };
  const chartData: IChartData[] = [
    {
      x: "KDA",
      y:
        playerData[dataIndex].kda !== undefined
          ? playerData[dataIndex].kda * 10
          : null,
    },
    {
      x: "KP",
      y:
        dataIndex < 6 && playerData[dataIndex].kp !== undefined
          ? playerData[dataIndex].kp
          : dataIndex >= 6 && playerData[dataIndex].gd10 !== undefined
          ? playerData[dataIndex].gd10
          : null,
    },
    {
      x: "DTH",
      y:
        dataIndex < 6 && playerData[dataIndex].dth !== undefined
          ? playerData[dataIndex].dth
          : dataIndex >= 6 && playerData[dataIndex].cs10 !== undefined
          ? playerData[dataIndex].cs10 * 10
          : null,
    },
    {
      x: "GOLD",
      y:
        dataIndex < 6 && playerData[dataIndex].gold !== undefined
          ? playerData[dataIndex].gold
          : dataIndex >= 6 && playerData[dataIndex].dpm !== undefined
          ? playerData[dataIndex].dpm / 10
          : null,
    },
    {
      x: "WIN",
      y:
        dataIndex < 6 && playerData[dataIndex].winRate !== undefined
          ? playerData[dataIndex].winRate
          : dataIndex >= 6 && playerData[dataIndex].dmg !== undefined
          ? playerData[dataIndex].dmg
          : null,
    },
  ];
  useEffect(() => {
    springClicked();
  }, [values]);
  useEffect(() => {
    if (seasons === "Spring") {
      setSpringOpacity(1);
      setSummerOpacity(0.5);
      setWorldOpacity(0.5);
    } else if (seasons === "Summer") {
      setSpringOpacity(0.5);
      setSummerOpacity(1);
      setWorldOpacity(0.5);
    } else if (seasons === "Worlds") {
      setSpringOpacity(0.5);
      setSummerOpacity(0.5);
      setWorldOpacity(1);
    }
  }, [seasons]);
  console.log(springOpacity, summerOpacity, worldOpacity);
  return (
    <Container>
      <Item>
        <Profile>
          <Img
            src={`${process.env.PUBLIC_URL}/img/profile/${newPlayerName}.png`}
            alt={newPlayerName ? newPlayerName : "loading"}
          ></Img>
          <Logo
            src={`${process.env.PUBLIC_URL}/img/team_logo/${playerData[dataIndex].team}.png`}
            alt={playerData[dataIndex].team}
          ></Logo>
          <LogoName>{playerData[dataIndex].team}</LogoName>
          <WinBar>
            <WinRateBar
              winrate={
                playerData[dataIndex].winRate !== undefined
                  ? playerData[dataIndex].winRate
                  : 0
              }
            ></WinRateBar>
          </WinBar>
          <WinRate>
            {playerData[dataIndex].winRate !== undefined
              ? `${playerData[dataIndex].winRate}%`
              : ""}
            <WinRateRank>
              {playerData[dataIndex].winRateRank === 1
                ? `${playerData[dataIndex].winRateRank}st`
                : playerData[dataIndex].winRateRank === 2
                ? `${playerData[dataIndex].winRateRank}nd`
                : playerData[dataIndex].winRateRank === 3
                ? `${playerData[dataIndex].winRateRank}rd`
                : playerData[dataIndex].winRateRank !== undefined
                ? `${playerData[dataIndex].winRateRank}th`
                : ""}
            </WinRateRank>
          </WinRate>
          <Year>
            {values}
            <Season>{seasons}</Season>
          </Year>
          <Chart>
            <ApexChart
              type="radar"
              width={250}
              height={250}
              series={[
                {
                  name: `${values} ${seasons}`,
                  data: chartData,
                },
              ]}
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                  width: "100%",
                  height: "100%",
                  type: "radar",
                },
                xaxis: {
                  categories: [
                    "KDA",
                    dataIndex < 6 ? "KP%" : "GD@10",
                    dataIndex < 6 ? "DTH%" : "CS@10",
                    dataIndex < 6 ? "GOLD%" : "DPM",
                    dataIndex < 6 ? "WIN%" : "DMG%",
                  ],
                },
                yaxis: {
                  show: false,
                  tickAmount: 3,
                  min: -100,
                  max: 100,
                  labels: {
                    formatter: (a) => a.toFixed(1),
                  },
                },
                dataLabels: {
                  enabled: true,
                  formatter: (element: number, { dataPointIndex }) =>
                    `${
                      dataPointIndex === 0
                        ? element / 10
                        : dataIndex >= 6 && dataPointIndex === 2
                        ? element / 10
                        : dataIndex >= 6 && dataPointIndex === 3
                        ? element * 10
                        : element
                    }`,
                },
                tooltip: {
                  enabled: false,
                },
              }}
            ></ApexChart>
          </Chart>
        </Profile>
      </Item>
      <Item>
        <YearSelect id="year" onChange={handleSelect} value={values}>
          {selectValues.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </YearSelect>
        <SeasonSelect onClick={springClicked} opacity={springOpacity}>
          Spring
        </SeasonSelect>
        <SeasonSelect onClick={summerClicked} opacity={summerOpacity}>
          Summer
        </SeasonSelect>
        <SeasonSelect onClick={worldClicked} opacity={worldOpacity}>
          Worlds
        </SeasonSelect>
        {playerData[dataIndex].kda === undefined ? (
          <NoData year={values} season={seasons} />
        ) : (
          <>
            <StatBox>
              <div>
                <h1>{playerData[dataIndex].kda}</h1>
                <h1>
                  {playerData[dataIndex].kdaRank === 1
                    ? `${playerData[dataIndex].kdaRank}st`
                    : playerData[dataIndex].kdaRank === 2
                    ? `${playerData[dataIndex].kdaRank}nd`
                    : playerData[dataIndex].kdaRank === 3
                    ? `${playerData[dataIndex].kdaRank}rd`
                    : `${playerData[dataIndex].kdaRank}th`}
                </h1>
                <h1>KDA</h1>
              </div>
              <div>
                <h1>
                  {dataIndex < 6
                    ? playerData[dataIndex].kp
                    : playerData[dataIndex].gd10}
                </h1>
                {dataIndex < 6 ? (
                  <h1>
                    {playerData[dataIndex].kpRank === 1
                      ? `${playerData[dataIndex].kpRank}st`
                      : playerData[dataIndex].kpRank === 2
                      ? `${playerData[dataIndex].kpRank}nd`
                      : playerData[dataIndex].kpRank === 3
                      ? `${playerData[dataIndex].kpRank}rd`
                      : `${playerData[dataIndex].kpRank}th`}
                  </h1>
                ) : (
                  <h1>
                    {playerData[dataIndex].gd10Rank === 1
                      ? `${playerData[dataIndex].gd10Rank}st`
                      : playerData[dataIndex].gd10Rank === 2
                      ? `${playerData[dataIndex].gd10Rank}nd`
                      : playerData[dataIndex].gd10Rank === 3
                      ? `${playerData[dataIndex].gd10Rank}rd`
                      : `${playerData[dataIndex].gd10Rank}th`}
                  </h1>
                )}
                <h1>{dataIndex < 6 ? "KP%" : "GD@10"}</h1>
              </div>
              <div>
                <h1>
                  {dataIndex < 6
                    ? playerData[dataIndex].dth
                    : playerData[dataIndex].cs10}
                </h1>
                {dataIndex < 6 ? (
                  <h1>
                    {playerData[dataIndex].dthRank === 1
                      ? `${playerData[dataIndex].dthRank}st`
                      : playerData[dataIndex].dthRank === 2
                      ? `${playerData[dataIndex].dthRank}nd`
                      : playerData[dataIndex].dthRank === 3
                      ? `${playerData[dataIndex].dthRank}rd`
                      : `${playerData[dataIndex].dthRank}th`}
                  </h1>
                ) : (
                  <h1>
                    {playerData[dataIndex].cs10Rank === 1
                      ? `${playerData[dataIndex].cs10Rank}st`
                      : playerData[dataIndex].cs10Rank === 2
                      ? `${playerData[dataIndex].cs10Rank}nd`
                      : playerData[dataIndex].cs10Rank === 3
                      ? `${playerData[dataIndex].cs10Rank}rd`
                      : `${playerData[dataIndex].cs10Rank}th`}
                  </h1>
                )}
                <h1>{dataIndex < 6 ? "DTH%" : "CS@10"}</h1>
              </div>
              <div>
                <h1>
                  {dataIndex < 6
                    ? `${playerData[dataIndex].gold}%`
                    : playerData[dataIndex].dpm}
                </h1>
                {dataIndex < 6 ? (
                  <h1>
                    {playerData[dataIndex].goldRank === 1
                      ? `${playerData[dataIndex].goldRank}st`
                      : playerData[dataIndex].goldRank === 2
                      ? `${playerData[dataIndex].goldRank}nd`
                      : playerData[dataIndex].goldRank === 3
                      ? `${playerData[dataIndex].goldRank}rd`
                      : `${playerData[dataIndex].goldRank}th`}
                  </h1>
                ) : (
                  <h1>
                    {playerData[dataIndex].dpmRank === 1
                      ? `${playerData[dataIndex].dpmRank}st`
                      : playerData[dataIndex].dpmRank === 2
                      ? `${playerData[dataIndex].dpmRank}nd`
                      : playerData[dataIndex].dpmRank === 3
                      ? `${playerData[dataIndex].dpmRank}rd`
                      : `${playerData[dataIndex].dpmRank}th`}
                  </h1>
                )}
                <h1>{dataIndex < 6 ? "GOLD%" : "DPM"}</h1>
              </div>
              <div>
                <h1>
                  {dataIndex < 6
                    ? `${playerData[dataIndex].winRate}%`
                    : `${playerData[dataIndex].dmg}%`}
                </h1>
                {dataIndex < 6 ? (
                  <h1>
                    {playerData[dataIndex].winRateRank === 1
                      ? `${playerData[dataIndex].winRateRank}st`
                      : playerData[dataIndex].winRateRank === 2
                      ? `${playerData[dataIndex].winRateRank}nd`
                      : playerData[dataIndex].winRateRank === 3
                      ? `${playerData[dataIndex].winRateRank}rd`
                      : `${playerData[dataIndex].winRateRank}th`}
                  </h1>
                ) : (
                  <h1>
                    {playerData[dataIndex].dmgRank === 1
                      ? `${playerData[dataIndex].dmgRank}st`
                      : playerData[dataIndex].dmgRank === 2
                      ? `${playerData[dataIndex].dmgRank}nd`
                      : playerData[dataIndex].dmgRank === 3
                      ? `${playerData[dataIndex].dmgRank}rd`
                      : `${playerData[dataIndex].dmgRank}th`}
                  </h1>
                )}
                <h1>{dataIndex < 6 ? "WINRATE%" : "DMG%"}</h1>
              </div>
            </StatBox>
            <PlayerSaying>
              {Object.values(playersText).map((a) =>
                a.id === id ? a.text : ""
              )}
            </PlayerSaying>
            <CareerText>커리어</CareerText>
            <CareerBox>
              <div>
                <h1>
                  {playerData[dataIndex].groupRank === 1
                    ? `${playerData[dataIndex].groupRank}st`
                    : playerData[dataIndex].groupRank === 2
                    ? `${playerData[dataIndex].groupRank}nd`
                    : playerData[dataIndex].groupRank === 3
                    ? `${playerData[dataIndex].groupRank}rd`
                    : `${playerData[dataIndex].groupRank}th`}
                </h1>
                <h1>정규시즌</h1>
              </div>
              <div>
                {playerData[dataIndex].playoffRank !== undefined ? (
                  <h1>
                    {playerData[dataIndex].playoffRank === 1
                      ? `${playerData[dataIndex].playoffRank}st`
                      : playerData[dataIndex].playoffRank === 2
                      ? `${playerData[dataIndex].playoffRank}nd`
                      : playerData[dataIndex].playoffRank === 3
                      ? `${playerData[dataIndex].playoffRank}rd`
                      : `${playerData[dataIndex].playoffRank}th`}
                  </h1>
                ) : (
                  <h1>진출실패</h1>
                )}
                <h1>플레이오프</h1>
              </div>
              <div>
                <h1>
                  {playerData[dataIndex].pogpoint === 99
                    ? `World MVP`
                    : playerData[dataIndex].pogpoint}
                </h1>
                {playerData[dataIndex].pogpointRank !== undefined ? (
                  <h1>
                    {playerData[dataIndex].pogpointRank === 1
                      ? `${playerData[dataIndex].pogpointRank}st`
                      : playerData[dataIndex].pogpointRank === 2
                      ? `${playerData[dataIndex].pogpointRank}nd`
                      : playerData[dataIndex].pogpointRank === 3
                      ? `${playerData[dataIndex].pogpointRank}rd`
                      : `${playerData[dataIndex].pogpointRank}th`}
                  </h1>
                ) : (
                  ""
                )}
                <h1>POG포인트</h1>
              </div>
            </CareerBox>
          </>
        )}
      </Item>
    </Container>
  );
}
export default Stats;
