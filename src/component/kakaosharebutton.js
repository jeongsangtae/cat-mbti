import React from "react";
import { Button } from "react-bootstrap";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "https://cat-mbti-jeong.netlify.app/";
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("76a27ef7b1de116a3abf59841429dde1");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button
      variant="warning"
      onClick={shareKakao}
      style={{
        width: "170px",
        fontFamily: "휴먼범석체",
        marginLeft: "20px",
        marginTop: "15px",
        marginBottom: "10px",
        fontSize: "24px",
        color: "white",
      }}
    >
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
