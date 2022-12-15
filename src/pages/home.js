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
    <Container>
      <Header>예비집사 판별기</Header>
      <Wrapper>
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
        <Desc>내가 집사가 되어서 고양이를 키운다면 ?</Desc>
        <Button
          variant="success"
          style={{
            fontFamily: "휴먼범석체",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "25px",
          }}
          onClick={handelClickButton}
        >
          테스트 시작하기
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 10vh;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
  font-family: "휴먼범석체";
  color: #198754;
  font-weight: 550;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  font-size: 18pt;
  font-family: "휴먼범석체";
  color: #198754;
  font-weight: 550;
`;
