import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  console.log("totalScore", totalScore);

  const handleClickButtonA = (no, type) => {
    if (type === "EI") {
      // 기존 스코어에 더 할 값을 계산 (기존의 값 + 배점)
      const addScore = totalScore[0].score + no;
      // 새로운 객체 생성
      const newObject = { id: "EI", score: addScore };
      // splice(javascript 함수) 통해 새로운 객체를 해당 객체 자리에 넣어줌
      totalScore.splice(0, 1, newObject);
    } else if (type === "SN") {
      const addScore = totalScore[1].score + no;

      const newObject = { id: "SN", score: addScore };

      totalScore.splice(1, 1, newObject);
    } else if (type === "TF") {
      const addScore = totalScore[2].score + no;

      const newObject = { id: "TF", score: addScore };

      totalScore.splice(2, 1, newObject);
    } else {
      const addScore = totalScore[3].score + no;

      const newObject = { id: "JP", score: addScore };

      totalScore.splice(3, 1, newObject);
    }

    setQuestionNo(questionNo + 1);
  };

  const handleClickButtonB = (no) => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButtonA(1, QuestionData[questionNo].type)}
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButtonB(0, QuestionData[questionNo].type)}
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
            marginLeft: "20px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  font-family: "휴먼범석체";
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "휴먼범석체";
`;
