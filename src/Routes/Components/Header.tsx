import { useForm } from "react-hook-form";
import { data2013, playersId } from "../../data";
import styled from "styled-components";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface IForm {
  keyword: string;
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 56px;
  top: 0;
  font-size: 14px;
  color: white;
  z-index: 99;
  padding: 0% 19%;
`;
const Svg = styled.svg`
  width: 58px;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
  margin-left: -45%;
`;
const Item = styled.li`
  margin-right: 38px;
  transition: 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Search = styled.form`
  display: flex;
  align-items: center;
  width: fit-content;
  svg {
    position: absolute;
    margin-left: 160px;
    width: 14px;
    height: 14px;
    z-index: 1;
  }
`;
const Input = styled.input`
  position: relative;
  background: #001222 0% 0% no-repeat padding-box;
  color: white;
  box-shadow: 3px 3px 6px #00000029;
  border: none;
  border-radius: 20px;
  width: 191px;
  height: 32px;
  padding-left: 16px;
  padding-right: 38px;
`;

const DataList = styled.datalist`
  color: white;
`;

const UnderLine = styled(motion.span)`
  position: absolute;
  width: 50px;
  height: 1px;
  bottom: -6px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #00ff99;
`;
const Footer = styled.footer`
  position: fixed;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  font-weight: lighter;
  color: white;
  bottom: 18px;
`;

function Header() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const history = useNavigate();
  const statsMatch = useMatch("/stats/*");
  const comparedMatch = useMatch("/compared/*");
  const playersName = Object.keys(data2013.results[0][2013].spring);
  const playersKey = Object.values(playersId).map((id) => id.id);
  const players = playersKey.map((b, index) => {
    return {
      name: playersName[index],
      id: b,
    };
  });

  const onValid = (data: IForm) => {
    const findName = players
      .map((a) => (a.name === data.keyword ? a.id : null))
      .find((element) => element !== null);
    playersName.includes(data.keyword)
      ? history(`/stats/${findName}`)
      : alert("선수 이름을 다시 입력해주세요");
    setValue("keyword", "");
  };
  return (
    <>
      <Nav>
        <Link to={"/"}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            id="logo-40"
            width="58"
            height="32"
            viewBox="0 0 58 32"
            fill="none"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0H37C45.8366 0 53 7.16344 53 16V32H16C7.16344 32 0 24.8366 0 16Z"
              fill="#ffffff"
              stopColor="#ffffff"
            />{" "}
            <rect
              x="6"
              y="6"
              width="41"
              height="20"
              rx="10"
              fill="#bbbbbb"
              stopColor="#bbbbbb"
            />{" "}
            <circle cx="16" cy="16" r="5" fill="#000000" />{" "}
            <circle cx="14" cy="14" r="1" fill="#ffffff" />{" "}
            <circle cx="38" cy="16" r="5" fill="#000000" />{" "}
            <circle cx="36" cy="14" r="1" fill="#ffffff" />{" "}
          </Svg>
        </Link>
        <Items>
          <Item>
            <Link to={"/stats/960507"}>
              상세지표{statsMatch && <UnderLine layoutId="underline" />}
            </Link>
          </Item>
          <Item>
            <Link to={"/compared"}>
              스탯비교{comparedMatch && <UnderLine layoutId="underline" />}
            </Link>
          </Item>
        </Items>
        <Search onSubmit={handleSubmit(onValid)}>
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
          <Input
            {...register("keyword", { required: true })}
            list="players"
            placeholder="faker"
          />
          <DataList id="players">
            {playersName?.map((name) => (
              <option value={name} key={name}></option>
            ))}
          </DataList>
        </Search>
      </Nav>
      <Footer>Copyright 2022. jesus0321@naver.com all rights reserved.</Footer>
    </>
  );
}
export default Header;
