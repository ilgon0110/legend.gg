import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Keyboard, EffectCoverflow, Pagination } from "swiper";
import { data2013, playersId } from "../data";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background: url("${process.env.PUBLIC_URL}/img/oldrox.png");
  background-repeat: no-repeat;
  background-position: 50% 55%;
  background-size: 60%;
`;
const Wrapper = styled.div`
  position: relative;
  top: 35%;
`;
const Img = styled.img`
  width: 300px;
  height: 400px;
  box-shadow: 0px 3px 6px #00000029;
`;
const Text = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  color: white;
  font-size: 24px;
  font-weight: 300px;
  top: 15%;
  opacity: 0.8;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const playersName = Object.keys(data2013.results[0][2013].spring);
  const playersKey = Object.values(playersId).map((id) => id.id);
  const players = playersKey.map((b, index) => {
    return {
      name: playersName[index],
      id: b,
    };
  });

  useEffect(() => {
    setLoading(false);
  }, [playersName]);
  const history = useNavigate();
  const onBoxClicked = (id: number) => {
    history(`/stats/${id}`);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Text>레전드 선수들의 시즌별 스탯 비교하기</Text>
          <Wrapper>
            <Swiper
              effect={"coverflow"}
              spaceBetween={0}
              keyboard={{
                enabled: true,
              }}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3.5}
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={false}
              modules={[Keyboard, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {players?.map((a) => (
                <SwiperSlide key={a.id}>
                  <Img
                    src={`${process.env.PUBLIC_URL}/img/profile/${a.name}.png`}
                    alt={a.name}
                    onClick={() => onBoxClicked(a.id)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Wrapper>
        </Container>
      )}
    </>
  );
}
export default Home;
