import React from "react";
import { useNavigate } from "react-router-dom";
// css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import CatImage from "../assets/logocat.jpg";

const Result = () => {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            src={CatImage}
            className="rounded-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 렉돌입니다.</Desc>
        <Button style={{ fontFamily: "휴먼범석체" }}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "휴먼범석체";
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
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 30px;
  font-family: "휴먼범석체";
`;
