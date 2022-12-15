import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      // 다음 문제로 문제 수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // mbti 도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      console.log("mbti", mbti);
      //결과 페이지 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }

    // if (type === "EI") {
    //   // 기존 스코어에 더 할 값을 계산 (기존의 값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체 생성
    //   const newObject = { id: "EI", score: addScore };
    //   // splice(javascript 함수) 통해 새로운 객체를 해당 객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + no;

    //   const newObject = { id: "SN", score: addScore };

    //   totalScore.splice(1, 1, newObject);
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + no;

    //   const newObject = { id: "TF", score: addScore };

    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[3].score + no;

    //   const newObject = { id: "JP", score: addScore };

    //   totalScore.splice(3, 1, newObject);
    // }
  };

  return (
    <Container>
      <ProgressBar
        variant="success"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px", width: "80%" }}
      />
      <Wrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="success"
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
            style={{
              width: "40%",
              minHeight: "200px",
              fontSize: "15pt",
            }}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            variant="success"
            onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
            style={{
              width: "40%",
              minHeight: "200px",
              marginLeft: "20px",
              fontSize: "15pt",
            }}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9d4b3;
  height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
`;

const Title = styled.div`
  width: 90%;
  font-size: 30pt;
  text-align: center;
  font-family: "휴먼범석체";
  color: #198754;
  margin-top: 20px;
  font-weight: 550;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "휴먼범석체";
  margin-top: 40px;
  width: 100%;
`;
