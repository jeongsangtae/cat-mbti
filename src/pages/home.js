import React from "react";
import { useNavigate } from "react-router-dom";
// css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import CatImage from "../assets/logocat.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handelClickButton = () => {
    // useHistory
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            alt="고양이 사진"
            src={CatImage}
            className="rounded-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
        <Button
          variant="success"
          style={{
            fontFamily: "휴먼범석체",
            marginTop: "15px",
            marginBottom: "15px",
          }}
          onClick={handelClickButton}
        >
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fdf5e6;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "휴먼범석체";
  background-color: #e9d4b3;
  color: white;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
  font-family: "휴먼범석체";
  color: ;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 18pt;
  margin-top: 30px;
  font-family: "휴먼범석체";
`;
