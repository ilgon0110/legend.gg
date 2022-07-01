import ApexChart from "react-apexcharts";
import { data2013, data2015 } from "../../../data";
import { useEffect, useState } from "react";
import NoData from "../NoData";
import { useNavigate } from "react-router-dom";

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
interface IChartData {
  x: string;
  y: number | null;
}

function PlayerChart({
  findName,
  findYears,
  findSeasons,
  findName2,
  findYears2,
  findSeasons2,
}: {
  findName: string;
  findYears: string;
  findSeasons: string;
  findName2: string;
  findYears2: string;
  findSeasons2: string;
}) {
  const [dataCheck, setDataCheck] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);
  const [dataCheck2, setDataCheck2] = useState(false);
  const [dataIndex2, setDataIndex2] = useState(0);
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
  const player2Data: IplayerData[] = [
    data2013.results[0][2013].spring[findName2],
    data2013.results[0][2013].summer[findName2],
    data2013.results[0][2013].world[findName2],
    data2013.results[1][2014].spring[findName2],
    data2013.results[1][2014].summer[findName2],
    data2013.results[1][2014].world[findName2],
    data2015.results[0][2015].spring[findName2],
    data2015.results[0][2015].summer[findName2],
    data2015.results[0][2015].world[findName2],
    data2015.results[1][2016].spring[findName2],
    data2015.results[1][2016].summer[findName2],
    data2015.results[1][2016].world[findName2],
    data2015.results[2][2017].spring[findName2],
    data2015.results[2][2017].summer[findName2],
    data2015.results[2][2017].world[findName2],
    data2015.results[3][2018].spring[findName2],
    data2015.results[3][2018].summer[findName2],
    data2015.results[3][2018].world[findName2],
    data2015.results[4][2019].spring[findName2],
    data2015.results[4][2019].summer[findName2],
    data2015.results[4][2019].world[findName2],
    data2015.results[5][2020].spring[findName2],
    data2015.results[5][2020].summer[findName2],
    data2015.results[5][2020].world[findName2],
    data2015.results[6][2021].spring[findName2],
    data2015.results[6][2021].summer[findName2],
    data2015.results[6][2021].world[findName2],
  ];
  const setPlayer1Data = () => {
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
  const setPlayer2Data = () => {
    if (findYears2 === "2013" && findSeasons2 === "Spring") {
      setDataIndex2(0);
    } else if (findYears2 === "2013" && findSeasons2 === "Summer") {
      setDataIndex2(1);
    } else if (findYears2 === "2013" && findSeasons2 === "World") {
      setDataIndex2(2);
    } else if (findYears2 === "2014" && findSeasons2 === "Spring") {
      setDataIndex2(3);
    } else if (findYears2 === "2014" && findSeasons2 === "Summer") {
      setDataIndex2(4);
    } else if (findYears2 === "2014" && findSeasons2 === "World") {
      setDataIndex2(5);
    } else if (findYears2 === "2015" && findSeasons2 === "Spring") {
      setDataIndex2(6);
    } else if (findYears2 === "2015" && findSeasons2 === "Summer") {
      setDataIndex2(7);
    } else if (findYears2 === "2015" && findSeasons2 === "World") {
      setDataIndex2(8);
    } else if (findYears2 === "2016" && findSeasons2 === "Spring") {
      setDataIndex2(9);
    } else if (findYears2 === "2016" && findSeasons2 === "Summer") {
      setDataIndex2(10);
    } else if (findYears2 === "2016" && findSeasons2 === "World") {
      setDataIndex2(11);
    } else if (findYears2 === "2017" && findSeasons2 === "Spring") {
      setDataIndex2(12);
    } else if (findYears2 === "2017" && findSeasons2 === "Summer") {
      setDataIndex2(13);
    } else if (findYears2 === "2017" && findSeasons2 === "World") {
      setDataIndex2(14);
    } else if (findYears2 === "2018" && findSeasons2 === "Spring") {
      setDataIndex2(15);
    } else if (findYears2 === "2018" && findSeasons2 === "Summer") {
      setDataIndex2(16);
    } else if (findYears2 === "2018" && findSeasons2 === "World") {
      setDataIndex2(17);
    } else if (findYears2 === "2019" && findSeasons2 === "Spring") {
      setDataIndex2(18);
    } else if (findYears2 === "2019" && findSeasons2 === "Summer") {
      setDataIndex2(19);
    } else if (findYears2 === "2019" && findSeasons2 === "World") {
      setDataIndex2(20);
    } else if (findYears2 === "2020" && findSeasons2 === "Spring") {
      setDataIndex2(21);
    } else if (findYears2 === "2020" && findSeasons2 === "Summer") {
      setDataIndex2(22);
    } else if (findYears2 === "2020" && findSeasons2 === "World") {
      setDataIndex2(23);
    } else if (findYears2 === "2021" && findSeasons2 === "Spring") {
      setDataIndex2(24);
    } else if (findYears2 === "2021" && findSeasons2 === "Summer") {
      setDataIndex2(25);
    } else if (findYears2 === "2021" && findSeasons2 === "World") {
      setDataIndex2(26);
    }
  };
  const playerNoData = [
    {
      x: "KDA",
      y: 0,
    },
    {
      x: "KP",
      y: 0,
    },
    {
      x: "DTH",
      y: 0,
    },
    {
      x: "GOLD",
      y: 0,
    },
    {
      x: "WIN",
      y: 0,
    },
  ];
  const player1ChartData: IChartData[] =
    findName === ""
      ? playerNoData
      : [
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
  const player2ChartData: IChartData[] =
    findName2 === ""
      ? playerNoData
      : [
          {
            x: "KDA",
            y:
              player2Data[dataIndex2].kda !== undefined
                ? player2Data[dataIndex2].kda * 10
                : null,
          },
          {
            x: "KP",
            y:
              dataIndex2 < 6 && player2Data[dataIndex2].kp !== undefined
                ? player2Data[dataIndex2].kp
                : dataIndex2 >= 6 && player2Data[dataIndex2].gd10 !== undefined
                ? player2Data[dataIndex2].gd10
                : null,
          },
          {
            x: "DTH",
            y:
              dataIndex2 < 6 && player2Data[dataIndex2].dth !== undefined
                ? player2Data[dataIndex2].dth
                : dataIndex2 >= 6 && player2Data[dataIndex2].cs10 !== undefined
                ? player2Data[dataIndex2].cs10 * 10
                : null,
          },
          {
            x: "GOLD",
            y:
              dataIndex2 < 6 && player2Data[dataIndex2].gold !== undefined
                ? player2Data[dataIndex2].gold
                : dataIndex2 >= 6 && player2Data[dataIndex2].dpm !== undefined
                ? player2Data[dataIndex2].dpm / 10
                : null,
          },
          {
            x: "WIN",
            y:
              dataIndex2 < 6 && player2Data[dataIndex2].winRate !== undefined
                ? player2Data[dataIndex2].winRate
                : dataIndex2 >= 6 && player2Data[dataIndex2].dmg !== undefined
                ? player2Data[dataIndex2].dmg
                : null,
          },
        ];

  useEffect(() => {
    setPlayer1Data();
    if (findName !== "" && playerData[dataIndex].winRate === undefined) {
      setDataCheck(false);
    } else {
      setDataCheck(true);
    }
  }, [setPlayer1Data]);
  useEffect(() => {
    setPlayer2Data();
    if (findName2 !== "" && player2Data[dataIndex2].winRate === undefined) {
      setDataCheck2(false);
    } else {
      setDataCheck2(true);
    }
  }, [setPlayer2Data]);

  return (
    <ApexChart
      type="radar"
      width={582}
      series={[
        {
          name: `${findYears} ${findSeasons}`,
          data: dataCheck ? player1ChartData : playerNoData,
        },
        {
          name: `${findYears2} ${findSeasons2}`,
          data: dataCheck2 ? player2ChartData : playerNoData,
        },
      ]}
      options={{
        chart: {
          toolbar: {
            show: false,
          },
          foreColor: "#FFFFFF",
          width: "100%",
          height: "100%",
          type: "radar",
        },
        xaxis: {
          categories: [
            "KDA",
            dataCheck === true && dataIndex < 6
              ? "KP%"
              : dataCheck === true && dataIndex >= 6
              ? "GD@10"
              : dataCheck === false && dataIndex2 < 6
              ? "KP%"
              : dataCheck === false && dataIndex2 >= 6
              ? "GD@10"
              : dataCheck === false && dataCheck2 === false
              ? "KP%"
              : "KP%",
            dataCheck === true && dataIndex < 6
              ? "DTH%"
              : dataCheck === true && dataIndex >= 6
              ? "CS@10"
              : dataCheck === false && dataIndex2 < 6
              ? "DTH%"
              : dataCheck === false && dataIndex2 >= 6
              ? "CS@10"
              : dataCheck === false && dataCheck2 === false
              ? "DTH%"
              : "DTH%",
            dataCheck === true && dataIndex < 6
              ? "GOLD%"
              : dataCheck === true && dataIndex >= 6
              ? "DPM"
              : dataCheck === false && dataIndex2 < 6
              ? "GOLD%"
              : dataCheck === false && dataIndex2 >= 6
              ? "DPM"
              : dataCheck === false && dataCheck2 === false
              ? "GOLD%"
              : "GOLD%",
            dataCheck === true && dataIndex < 6
              ? "WIN%"
              : dataCheck === true && dataIndex >= 6
              ? "DMG%"
              : dataCheck === false && dataIndex2 < 6
              ? "WIN%"
              : dataCheck === false && dataIndex2 >= 6
              ? "DMG%"
              : dataCheck === false && dataCheck2 === false
              ? "WIN%"
              : "WIN%",
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
  );
}

export default PlayerChart;
