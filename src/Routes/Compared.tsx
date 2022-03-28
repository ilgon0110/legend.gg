import styled from "styled-components";
import { useForm } from "react-hook-form";
import { data2013, playersId } from "../data";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Player1 from "./Components/Player1";
import Player2 from "./Components/Player2";
import PlayerChart from "./Components/PlayerChart";

interface Idata {
  players: string;
  years: string;
  seasons: string;
  players2: string;
  years2: string;
  seasons2: string;
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
  div:nth-child(2) {
    grid-column: 4/10;
  }
  div:last-child {
    grid-column: 10/13;
  }
`;
const Item = styled.div`
  position: relative;
`;
const InputPlayer = styled.div`
  position: relative;
  width: 100%;
  height: 536px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  align-items: center;
`;
const Search = styled.form``;
const Input = styled.input`
  position: relative;
  width: 80%;
  height: 32px;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  top: 150px;
  margin-bottom: 24px;
  &::placeholder {
    color: white;
  }
`;
const Error = styled.h1`
  position: relative;
  color: #fadc44;
  top: 130px;
  font-size: 10px;
  font-weight: lighter;
  text-align: left;
  margin-left: 27px;
  line-height: 10px;
`;
const DataList = styled.datalist`
  color: white;
`;
const ChartText = styled.h1`
  position: relative;
  text-align: center;
  color: white;
  font-size: 20px;
  line-height: 30px;
  top: 10%;
`;
const ChartText2 = styled.h1`
  position: relative;
  text-align: center;
  color: white;
  font-size: 16px;
  top: 13%;
  opacity: 0.7;
`;
const Chart = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  top: 150px;
  box-shadow: 0px 0px 6px #00000029;
  svg {
    width: 25px;
    height: 25px;
  }
`;

function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<Idata>();
  const Years = [
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
  const Seasons = ["Spring", "Summer", "World"];
  const history = useNavigate();
  const comparedMatch = useMatch("/compared");
  const comparedMatch2 = useMatch("/compared/2");
  console.log(comparedMatch);
  const [dataCheck, setDataCheck] = useState(false);
  const [dataCheck2, setDataCheck2] = useState(false);
  const [dataPlayer, setDataPlayer] = useState<string>("faker");
  const [dataYears, setDataYears] = useState<string>("2013");
  const [dataSeasons, setDataSeasons] = useState<string>("Spring");
  const [dataPlayer2, setDataPlayer2] = useState<string>("faker");
  const [dataYears2, setDataYears2] = useState<string>("2013");
  const [dataSeasons2, setDataSeasons2] = useState<string>("Spring");
  const playersName = Object.keys(data2013.results[0][2013].spring);
  const playersKey = Object.values(playersId).map((id) => id.id);
  const players = playersKey.map((b, index) => {
    return {
      name: playersName[index],
      id: b,
    };
  });
  const onValid = (data: Idata) => {
    const findId = players
      .map((a) => (a.name === data.players ? a.id : null))
      .find((element) => element !== null);
    if (
      playersName.includes(data.players) &&
      Years.includes(data.years) &&
      Seasons.includes(data.seasons)
    ) {
      console.log("통과");
      setDataCheck(true);
      history(`${findId}`);
      const setData = () => {
        players.map((a) => (findId === a.id ? setDataPlayer(a.name) : null));
        setDataYears(data.years);
        setDataSeasons(data.seasons);
      };
      setData();
    } else if (!playersName.includes(data.players)) {
      setError("players", { message: "없는 선수입니다." });
      setDataCheck(false);
    } else if (!Years.includes(data.years)) {
      setError("years", { message: "없는 연도입니다." });
      setDataCheck(false);
    } else if (!Seasons.includes(data.seasons)) {
      setError("seasons", { message: "없는 시즌입니다." });
      setDataCheck(false);
    }
    console.log(errors);
  };

  const onValid2 = (data: Idata) => {
    const findId = players
      .map((a) => (a.name === data.players2 ? a.id : null))
      .find((element) => element !== null);
    if (
      playersName.includes(data.players2) &&
      Years.includes(data.years2) &&
      Seasons.includes(data.seasons2)
    ) {
      console.log("통과2");
      setDataCheck2(true);
      history(`${findId}`);
      const setData2 = () => {
        players.map((a) => (findId === a.id ? setDataPlayer2(a.name) : null));
        setDataYears2(data.years2);
        setDataSeasons2(data.seasons2);
      };
      setData2();
    } else if (!playersName.includes(data.players2)) {
      setError("players2", { message: "없는 선수입니다." });
      setDataCheck2(false);
    } else if (!Years.includes(data.years2)) {
      setError("years2", { message: "없는 연도입니다." });
      setDataCheck2(false);
    } else if (!Seasons.includes(data.seasons2)) {
      setError("seasons2", { message: "없는 시즌입니다." });
      setDataCheck2(false);
    }
    console.log(errors);
  };
  const resetError = () => {
    setError("players", { message: "" });
    setError("years", { message: "" });
    setError("seasons", { message: "" });
    setError("players2", { message: "" });
    setError("years2", { message: "" });
    setError("seasons2", { message: "" });
  };
  useEffect(() => {
    if (comparedMatch !== null) {
      setDataCheck(false);
      setDataPlayer("faker");
      setDataYears("2013");
      setDataSeasons("Spring");
    }
  }, [comparedMatch]);
  useEffect(() => {
    if (comparedMatch2 !== null) {
      setDataCheck2(false);
      setDataPlayer2("faker");
      setDataYears2("2013");
      setDataSeasons2("Spring");
    }
  }, [comparedMatch2]);
  // useEffect(() => {
  //   if (dataYears === "2013" && dataYears2 === "2015") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2013" && dataYears2 === "2016") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2013" && dataYears2 === "2017") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2013" && dataYears2 === "2018") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2013" && dataYears2 === "2019") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2013" && dataYears2 === "2020") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2013" && dataYears2 === "2021") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2014" && dataYears2 === "2015") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2014" && dataYears2 === "2016") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2014" && dataYears2 === "2017") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2014" && dataYears2 === "2018") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2014" && dataYears2 === "2019") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2014" && dataYears2 === "2020") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2014" && dataYears2 === "2021") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2015" && dataYears2 === "2013") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2015" && dataYears2 === "2014") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2016" && dataYears2 === "2013") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2016" && dataYears2 === "2014") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2017" && dataYears2 === "2013") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2017" && dataYears2 === "2014") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2018" && dataYears2 === "2013") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2018" && dataYears2 === "2014") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2019" && dataYears2 === "2013") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2019" && dataYears2 === "2014") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2020" && dataYears2 === "2013") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2020" && dataYears2 === "2014") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2021" && dataYears2 === "2013") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   } else if (dataYears === "2021" && dataYears2 === "2014") {
  //     alert(`${dataYears}연도와 ${dataYears2}연도는 비교할 수 없습니다.`);
  //     setDataYears("");
  //     setDataYears2("");
  //     history("/");
  //   }
  // }, [dataYears, dataYears2, history]);

  return (
    <Container>
      <Item>
        <InputPlayer>
          {dataCheck ? (
            <Player1
              findName={dataPlayer}
              findYears={dataYears}
              findSeasons={dataSeasons}
            />
          ) : (
            <Search onSubmit={handleSubmit(onValid)}>
              <Input
                {...register("players", { required: true })}
                list="players"
                placeholder="선수선택"
              />
              <Error>{errors?.players?.message}</Error>
              <DataList id="players">
                {playersName.map((name) => (
                  <option value={name} key={name}></option>
                ))}
              </DataList>
              <Input
                {...register("years", { required: true })}
                list="years"
                placeholder="연도선택"
              ></Input>
              <DataList id="years">
                {Years.map((years) => (
                  <option value={years} key={years}></option>
                ))}
              </DataList>
              <Error>{errors?.years?.message}</Error>
              <Input
                {...register("seasons", { required: true })}
                list="seasons"
                placeholder="시즌선택"
              ></Input>
              <DataList id="seasons">
                {Seasons.map((years) => (
                  <option value={years} key={years}></option>
                ))}
              </DataList>
              <Error>{errors?.seasons?.message}</Error>
              <Button>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
              <Button type="reset" onClick={resetError}>
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
            </Search>
          )}
        </InputPlayer>
      </Item>
      <Item>
        <ChartText>
          ※13-14 시즌 선수들은 15시즌 이후 선수들과 비교가 불가능합니다.
          <br />
          차트엔 문제 없어 보이지만 년도를 꼭 구분해줘야 합니다!
        </ChartText>
        <ChartText2>
          ex)13페이커와 21쇼메이커 비교 불가(지표 기준이 다름)
        </ChartText2>
        <Chart>
          <PlayerChart
            findName={dataPlayer}
            findYears={dataYears}
            findSeasons={dataSeasons}
            findName2={dataPlayer2}
            findYears2={dataYears2}
            findSeasons2={dataSeasons2}
          />
        </Chart>
      </Item>
      <Item>
        <InputPlayer>
          {dataCheck2 ? (
            <Player2
              findName2={dataPlayer2}
              findYears2={dataYears2}
              findSeasons2={dataSeasons2}
            />
          ) : (
            <Search onSubmit={handleSubmit(onValid2)}>
              <Input
                {...register("players2", { required: false })}
                list="players2"
                placeholder="선수선택"
              />
              <DataList id="players2">
                {playersName.map((name) => (
                  <option value={name} key={Math.random()}></option>
                ))}
              </DataList>
              <Error>{errors?.players2?.message}</Error>
              <Input
                {...register("years2", { required: false })}
                list="years2"
                placeholder="연도선택"
              ></Input>
              <DataList id="years2">
                {Years.map((years) => (
                  <option value={years} key={Math.random()}></option>
                ))}
              </DataList>
              <Error>{errors?.years2?.message}</Error>
              <Input
                {...register("seasons2", { required: false })}
                list="seasons2"
                placeholder="시즌선택"
              ></Input>
              <DataList id="seasons2">
                {Seasons.map((years) => (
                  <option value={years} key={Math.random()}></option>
                ))}
              </DataList>
              <Error>{errors?.seasons2?.message}</Error>
              <Button>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
              <Button type="reset" onClick={resetError}>
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
            </Search>
          )}
        </InputPlayer>
      </Item>
    </Container>
  );
}
export default Home;
