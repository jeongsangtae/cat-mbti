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
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            alt="결과이미지"
            src={resultData.image}
            className="rounded-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
        <Desc>{resultData.desc}</Desc>
        <ButtonGroup>
          <Button
            style={{ fontFamily: "휴먼범석체", width: 130 }}
            onClick={() => navigate("/")}
          >
            테스트 다시하기
          </Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroup>
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

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
