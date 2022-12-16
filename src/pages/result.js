import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
// import CatImage from "../assets/logocat.jpg";
import { ResultData } from "../assets/data/resultdata";
import KakaoShareButton from "../component/kakaosharebutton";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  // 최종적으로 도출한 결과 객체
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);

  return (
    <Container>
      <Header>예비집사 판별기</Header>
      <Wrapper>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            alt="결과이미지"
            src={resultData.image}
            className="rounded-circle"
            width={300}
            height={300}
          />
        </LogoImage>
        <Desc
          style={{
            fontSize: "17pt",
          }}
        >
          예비 집사님과 찰떡궁합인 고양이는 {resultData.name}
          입니다.
        </Desc>
        <Desc
          style={{
            marginTop: 10,
          }}
        >
          {resultData.desc}
        </Desc>
        <div>
          <Button
            variant="success"
            style={{
              width: "170px",
              fontFamily: "휴먼범석체",
              marginTop: "15px",
              marginBottom: "10px",
              fontSize: "24px",
            }}
            onClick={() => navigate("/")}
          >
            테스트 다시하기
          </Button>
          <KakaoShareButton data={resultData} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
  width: 100%;
  background-color: #fdf5e6;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  font-family: "휴먼범석체";
  background-color: #e9d4b3;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  margin-top: 70px;
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
  margin-bottom: 15px;
`;

const Desc = styled.div`
  font-size: 15pt;
  font-family: "휴먼범석체";
  text-align: center;
  color: #198754;
  width: 85%;
`;
